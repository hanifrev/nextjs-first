import React, { useState, useEffect } from 'react'

const Football = () => {
    const [lastMatch, setLastMatch] = useState([])

    useEffect(() => {
        loadData()
      }, [])

    const loadData = async () => {
        try {
            const ENDPOINT_MATCH =
                'https://api.football-data.org/v2/competitions/2016/matches?status=FINISHED '
            const apiKey = 'c324a93dadd041058d92d4fcac1dd530'
            const options = {
                method: 'GET',
                headers: {
                'X-Auth-Token': apiKey
                }
            }

            const response = await fetch(ENDPOINT_MATCH, options)
            const jsonData = await response.json()
            const info = jsonData.matches
            console.log(info)
        } catch (error) {

        }
    }

    return (
        <div>
            
        </div>
    )
}

export default Football
