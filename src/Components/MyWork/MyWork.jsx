import React from 'react'
import './MyWork.css'
import job_portal from '../../assets/job_portal_snip.png'
import todo from '../../assets/todo_snip.png'
import newsletter from '../../assets/newsletter_snip.png'
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
    return (
        <div id='work' className="mywork">
            <div className="mywork-title">
                <h1>Projects.</h1>
                {/* <img src={theme_pattern} alt="" /> */}
            </div>

            <div className="mywork-container">

                {/* {mywork_data.map((work,index)=>{
                    return <img src={work.w_img} key={index} alt=""/>
                })} */}
                <a href="https://github.com/GauravZn/job-portal" target='_blank'><img src={job_portal}/></a>
                <a href="https://github.com/GauravZn/newsletter" target='_blank'><img src={newsletter}/></a>
                <a href="https://github.com/GauravZn/To-Do-List" target='_blank'><img src={todo}/></a>
                
            </div>

            <a target='_blank' href='https://github.com/gauravzn' className="mywork-showmore">
                <p>More</p>
                <img className='more_arrow' src={arrow_icon} alt="" />
            </a>
        </div>

    )
}

export default MyWork
