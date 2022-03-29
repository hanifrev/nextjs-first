import { useState } from "react";
import Checkboxes from "./Checkboxes";
import { data, listDepartment, listJobsType } from "../../src/data/data";

const App = () => {
  const [jobs, setJobs] = useState(data);
  const [selected, setSelected] = useState({
    department: [],
    jobType: [],
  });

  /**
   * This function will perform the filtration process based on the key value.
   *
   * @param {number[]} checkboxState - It will take the final state of checkboxes
   * @param {string} key - It will help us to determine the type of filtration
   */
  const handleFilters = (checkboxState, key) => {
    const logic = "AND";
    const newFilters = { ...selected };
    newFilters[key] = checkboxState;

    const hasDepartment = newFilters.department.length > 0;
    const hasType = newFilters.jobType.length > 0;
    const hasFilters = hasDepartment || hasType;
    const filterDepartment = (module) =>
      newFilters.department.includes(0) ||
      newFilters.department.includes(module.department);
    const filterType = (module) =>
      newFilters.jobType.includes("") ||
      newFilters.jobType.includes(module.jobType);

    const filteredMovies = data.filter(
      logic === "OR"
        ? (m) => !hasFilters || filterDepartment(m) || filterType(m) // OR
        : (m) =>
            !hasFilters ||
            ((!hasDepartment || filterDepartment(m)) &&
              (!hasType || filterType(m))) // AND
    );
    setJobs(filteredMovies);
    setSelected(newFilters);
  };

  return (
    <div>
      {jobs.map((x) => (
        <div key={x.id}>
          <div>Name: {x.title}</div>
          <div>Department :{x.department}</div>
          <div>Type: {x.jobType}</div>
          <hr />
        </div>
      ))}

      <div className="row">
        <div className="col">
          <h1>Filter by Department</h1>
          <Checkboxes
            list={listDepartment}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "department")
            }
          />
        </div>

        <div className="col">
          <h1>Filter by Job Type</h1>
          <Checkboxes
            list={listJobsType}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "jobType")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default App;
