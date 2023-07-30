import React, { useState } from "react"

/** List of news */
const news = [
    ["Jun 2023", "Started as a Research Scientist at Apple MLR."],
    ["May 2023", "Successfully defended my PhD Dissertation."],
    ["Nov 2022", "One paper accepted in AAAI 2023"],
    ["Jul 2022", "One paper accepted in ECCV 2022"],
    ["Jun 2022", "Interning at Google Brain with Natasha Jaques."],
    ["Sep 2021", "One paper accepted in NeurIPS 2021"],
]

const News = () => {
    return (
        <div>
            <h1 className="text-3xl mb-3">News</h1>
            <table className="flex flex-col w-full">
                <tbody>
                    {news.map((item) => {
                        return (
                            <tr className="flex flex-row w-full">
                                <td className="w-1/12 flex-initial">{item[0]}</td>
                                <td className="w-8/12 flex-1">{item[1]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default News;
