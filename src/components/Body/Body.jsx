import React, { useEffect, useRef, useState } from "react";
import style from "./Body.module.css";
import { ArrowDown } from "react-feather";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";
import ReactToPrint from "react-to-print";
export default function Body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const section = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achivements",
    summary: "Summary",
    other: "Other",
  };
  const [activeColor, setActiveColor] = useState(colors[0]);
  const resumeRef = useRef();
  const [resumeInformation, setResumeInformation] = useState({
    [section.basicInfo]: {
      id: section.basicInfo,
      sectionTitle: section.basicInfo,
      detail: {},
    },
    [section.workExp]: {
      id: section.workExp,
      sectionTitle: section.workExp,
      details: [],
    },
    [section.project]: {
      id: section.project,
      sectionTitle: section.project,
      details: [],
    },
    [section.education]: {
      id: section.education,
      sectionTitle: section.education,
      details: [],
    },
    [section.achievement]: {
      id: section.achievement,
      sectionTitle: section.achievement,
      points: [],
    },
    [section.summary]: {
      id: section.summary,
      sectionTitle: section.summary,
      detail: "",
    },
    [section.other]: {
      id: section.other,
      sectionTitle: section.other,
      detail: "",
    },
  });
  useEffect(() => {
    console.log(resumeInformation);
  }, [resumeInformation]);
  return (
    <div className={style.container}>
      <div className={style.heading}>Resume Builder</div>
      <div className={style.toolbar}>
        <div className={style.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${style.color} ${activeColor===item?style.active:""}`}
              onClick={()=>setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return  <button className={style.button}>
            Download
            <ArrowDown />
          </button> ;
          }}
          content={() => resumeRef.current}
        />
       
      </div>
      <div className={style.main}>
        <Editor
          section={section}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          section={section}
          information={resumeInformation}
          activeColor={activeColor}
        />
      </div>
    </div>
  );
}
