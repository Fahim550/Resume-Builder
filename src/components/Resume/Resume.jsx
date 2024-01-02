import React, { forwardRef, useEffect, useRef, useState } from "react";
import style from "./Resume.module.css";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";

// eslint-disable-next-line react/display-name
const Resume = React.forwardRef((Props, ref) => {
  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");
  const section = Props.section;
  const information = Props.information;
  const containerRef = useRef();
  //   Object.assign([], activeInformation?.details)
  const info = {
    workExp: information[section.workExp],
    project: information[section.project],
    achievement: information[section.achievement],
    education: information[section.education],
    basicInfo: information[section.basicInfo],
    summary: information[section.summary],
    other: information[section.other],
  };
  console.log("🙌🙌", info);
  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };
  const sectionDiv = {
    [section.workExp]: (
      <div
        key={"workexp"}
        draggable
        onDragOver={() => setTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className={`${style.section} ${
          info.workExp?.sectionTitle ? "" : style.hidden
        }`}
      >
        <div className={style.sectionTitle}>{info.workExp.sectionTitle}</div>
        <div className={style.content}>
          {Object.assign([], info.workExp?.details)?.map((item) => (
            <div className={style.item} key={item.title}>
              <p className={style.title}>{item.title}</p>
              <p className={style.subTitle}>{item.companuName}</p>
              {item.certificateLink ? (
                <a className={style.link} href={item.certificateLink}>
                  <Paperclip />
                  {item.certificateLink}
                </a>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <p className={style.subTitle}>{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={style.date}>
                  <Calendar />
                  {""}
                  {getFormattedDate(item.startDate)} -{" "}
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <span />
              )}
              {item.location ? (
                <p className={style.date}>
                  <MapPin /> {item.location}
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={style.points}>
                  {item.points?.map((element, index) => (
                    <li className={style.point} key={element + index}>
                      {element}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [section.project]: (
      <div
        key={"project"}
        draggable
        onDragOver={() => setTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={`${style.section} ${
          info.project?.sectionTitle ? "" : style.hidden
        }`}
      >
        <div className={style.sectionTitle}>{info.project.sectionTitle}</div>
        <div className={style.content}>
          {Object.assign([], info.project?.details)?.map((item) => (
            <div className={style.item} key={item.title}>
              {/* <p className={style.title}>{item.title}</p>
              <p className={style.subTitle}>{item.companuName}</p> */}
              {item.title ? (
                <p className={style.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.deployLink ? (
                <a className={style.link} href={item.deployLink}>
                  <Paperclip />
                  {item.deployLink}
                </a>
              ) : (
                <span />
              )}
              {item.githubLink ? (
                <a className={item.githubLink} href={item.githubLink}>
                  <GitHub />
                  {item.githubLink}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className={style.overview}>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={style.points}>
                  {item.points?.map((element, index) => (
                    <li className={style.point} key={element + index}>
                      {element}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [section.education]: (
      <div
        key={"education"}
        draggable
        onDragOver={() => setTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
        className={`${style.section} ${
          info.education?.sectionTitle ? "" : style.hidden
        }`}
      >
        <div className={style.sectionTitle}>{info.education.sectionTitle}</div>
        <div className={style.content}>
          {Object.assign([], info.education?.details)?.map((item) => (
            <div className={style.item} key={item.title}>
              {/* <p className={style.title}>{item.title}</p>
              <p className={style.subTitle}>{item.companuName}</p> */}
              {item.title ? (
                <p className={style.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className={style.subTitle}>{item.college}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={style.date}>
                  <Calendar />
                  {""}
                  {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [section.achievement]: (
      <div
        key={"achievement"}
        draggable
        onDragOver={() => setTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
        className={`${style.section} ${
          info.achievement?.sectionTitle ? "" : style.hidden
        }`}
      >
        <div className={style.sectionTitle}>
          {info.achievement.sectionTitle}
        </div>
        <div className={style.content}>
          {info.achievement?.points?.length > 0 ? (
            <ul className={style.numbered}>
              {info.achievement?.points?.map((elem, index) => (
                <li className={style.point} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [section.summary]: (
      <div
        key={"summary"}
        draggable
        onDragOver={() => setTarget(info.summary?.id)}
        onDragEnd={() => setSource(info.summary?.id)}
        className={`${style.section} ${
          info.summary?.sectionTitle ? "" : style.hidden
        }`}
      >
        <div className={style.sectionTitle}>{info.summary?.sectionTitle}</div>
        <div className={style.content}>
          <p className={style.overview}>{info.summary?.detail}</p>
        </div>
      </div>
    ),
    [section.other]: (
      <div
        key={"other"}
        draggable
        onDragOver={() => setTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
        className={`${style.section} ${
          info.other?.sectionTitle ? "" : style.hidden
        }`}
      >
        <div className={style.sectionTitle}>{info.other?.sectionTitle}</div>
        <div className={style.content}>
          <p className={style.overview}>{info.other?.detail}</p>
        </div>
      </div>
    ),
  };
  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
  };

  useEffect(() => {
    setColumns([
      [section.project, section.education, section.summary],
      [section.workExp, section.achievement, section.other],
    ]);
  }, []);
  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source]);
  useEffect(() => {
    const container = containerRef.current;
    if (!Props.activeColor || !container) return;
    container.style.setProperty("--color", Props.activeColor);
    // console.log("😍😍",container);
  }, [Props.activeColor]);
  return (
    <div ref={ref}>
      <div ref={containerRef} className={style.container}>
        <div className={style.head}>
          <img src={info.basicInfo?.detail?.image} className={style.image} />
          <div className={style.title}>
            <p className={style.heading}>{info.basicInfo?.detail?.name}</p>
            <p className={style.subHeading}>{info.basicInfo?.detail?.title}</p>
          </div>
        </div>
        <div className={style.header}>
          <div className={style.links}>
            {info.basicInfo?.detail?.email ? (
              <a className={style.link}>
                <AtSign />
                {info.basicInfo?.detail?.email}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.phone ? (
              <a className={style.link}>
                <Phone />
                {info.basicInfo?.detail?.phone}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.linkedinLink ? (
              <a className={style.link}>
                <Linkedin />
                {info.basicInfo?.detail?.linkedinLink}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.githubLink ? (
              <a className={style.link}>
                <GitHub />
                {info.basicInfo?.detail?.githubLink}
              </a>
            ) : (
              <span />
            )}
          </div>
        </div>
        <div className={style.main}>
          <div className={style.col1}>
            {columns[0].map((item) => sectionDiv[item])}
          </div>
          <div className={style.col2}>
            {columns[1].map((item) => sectionDiv[item])}
          </div>
        </div>
      </div>
    </div>
  );
});
export default Resume;
