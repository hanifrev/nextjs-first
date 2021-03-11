import React from "react";

export default function CustomForm({
  pageText,
  siteVar,
  pageVar,
  variant,
  buColor,
  setOpenDiaglog,
}) {
  const [sLoading, setSLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [captchaErrors, setCaptchaErrors] = useState(false);
  const recaptchaRef = React.useRef();
  function onChange() {
    // function onChange(value) {
    // console.log('Captcha value:', value)
  }
  const onSubmitWithReCAPTCHA = async () => {
    const token = await recaptchaRef.current.executeAsync();
    // console.log('token', token)
    return token;
  };
  const setSendData = async (cmsSiteName, recommenderURL) => {
    const count = await userCountByApp(cmsSiteName);
    setSLoading(false);
    setOpenDiaglog({ userCount: count, rURL: recommenderURL });
  };
  const onSubmit = async (data, event) => {
    // event.preventDefault()
    setSLoading(true);
    const { email: inputMail } = data;
    const token = await onSubmitWithReCAPTCHA();
    const inputPhone = {
      country: null, // e.g. '+886', '+1', ...
      area: null, // e.g. '02', '03', ...
      number: null, // e.g. '988777666', '22223333'
    };

    const hasValidMail =
      inputMail && inputMail.length > 0 && validateEmail(inputMail);
    const eventName = hasValidMail ? "EMAIL" : "PHONE";
    // track the action that a user presses signup button (by email or phone)
    // trackOnMixPanel('PRESS_SIGNUP')
    // trackOnMixPanel(`${eventName}_SIGNUP`)

    await collectMemberInfo(
      inputMail,
      inputPhone,
      siteVar.defaultRole,
      pageText,
      token,
      false,
      eventName.toLowerCase()
    )
      .then((result) => {
        // track the action that signup result is returned by backend,
        // whatever it's a brand new user signup or duplicated user.
        // real brand new user signup event is tracked by backend
        // trackOnMixPanel('SIGNUP_RETURN')
        // trackOnMixPanel(`${eventName}_SIGNUP_SUCCESS`)

        // console.log('DialogInputMail.handlebuttonClick----- result= ', result)
        if (result.data !== undefined && result.data.data.success !== true) {
          setCaptchaErrors(true);
          setSLoading(false);
        } else {
          setCaptchaErrors(false);
          setSendData(pageVar.key, result.recommenderURL);
        }
        event.target.reset();
      })
      .catch((err) => {
        console.log("DialogInputMail.handlebuttonClick----- err= ", err);
      });

    // const qs = getUrlQS()
    // const referId = qs && qs.id ? qs.id : null
    // await CreateNewMamber(
    //   email,
    //   siteVar.defaultRole,
    //   referId,
    //   pageText,
    //   pageVar,
    //   token,
    // )
    //   .then(result => {
    //     // console.log('DialogInputMail.handlebuttonClick----- result= ', result)
    //     if (result.data !== undefined && result.data.data.success !== true) {
    //       setCaptchaErrors(true)
    //       setSLoading(false)
    //     } else {
    //       setCaptchaErrors(false)
    //       setSendData(pageVar.key, result.recommenderURL)
    //     }
    //     event.target.reset()
    //   })
    //   .catch(err => {
    //     console.log('DialogInputMail.handlebuttonClick----- err= ', err)
    //   })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="email-form">
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={googleReCAPTCHA.key}
        onChange={onChange}
      />
      <TextField
        placeholder={pageText.email_placeholder || "Your email here"}
        color="primary"
        name="email"
        inputRef={register}
        error={!!errors.email}
        helperText={
          errors.email
            ? pageText.email_validation2.innertHTML ||
              "Please input text in email format."
            : ""
        }
        variant={variant}
      />
      {captchaErrors ? <p className="rpe">The captcha is not valid</p> : ""}

      <Button
        variant="contained"
        color={buColor}
        type="submit"
        id="submit_mail"
      >
        {sLoading && <CircularProgress size={14} color="inherit" />}
        &nbsp;
        {pageText.section1_button_txt || "Get Early Access"}
      </Button>
    </form>
  );
}
