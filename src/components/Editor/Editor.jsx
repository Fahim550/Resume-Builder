import React, { useEffect, useRef, useState } from "react";
import style from "./Editor.module.css";
import InputControl from "../InputControl/InputControl";
import { X } from "react-feather";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Editor(Props) {
  const section = Props.section;
  const information = Props.information;
const [image,setImage]=useState( )
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(section)[0]
  );
  const [activeInformation, setActiveInformation] = useState(
    information[section[Object.keys(section)[0]]]
  );
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);
  const [sectionTitle, setSectionTitle] = useState(
    section[Object.keys(section)[0]]
  );
  const imageRef=useRef( );
  const handleImageChange=(e)=>{
    const file=e.target.files[0];
    console.log("👌👌",file);
    const url=URL.createObjectURL(file);
    console.log("😘😘",url);
    setImage(url)
    setValues({image:url})
  // setValues({image: e.target.files[0]});
  // console.log("image",values.image);
  // setImage((prev) => ({ ...prev, image:url }))
  }
  const [values, setValues] = useState({
    image:activeInformation?.detail?.image ||"",
    name: activeInformation?.details?.name || "",
    title: activeInformation?.details?.title || "",
    linkedinLink: activeInformation?.details?.linkedinLink || "",
    githubLink: activeInformation?.details?.githubLink || "",
    phone: activeInformation?.details?.phone || "",
    email: activeInformation?.details?.email || "",
  });

console.log("values",values.image);
  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };
   // basicInfo
  const basicInfoBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <InputControl
        label="Image"
        placeholder="Give your image"
        type="file"
        ref={imageRef}
        // value={values.image}
        onChange={handleImageChange}
        />
      </div>
      <div className={style.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full naem eg. Mustafijur Rahman Fahim"
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Title"
          placeholder="Enter your title eg. Frontend developer"
          name="name"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      {/* row2 */}
      <div className={style.row}>
        <InputControl
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
          value={values.linkedinLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedinLink: event.target.value }))
          }
        />
        <InputControl
          label="Github Link "
          placeholder="Enter your github profile link"
          name="github"
          value={values.githubLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, githubLink: event.target.value }))
          }
        />
      </div>
      {/* row3 */}
      <div className={style.row}>
        <InputControl
          label="Email"
          placeholder="Enter your email"
          name="email"
          value={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Phone"
          placeholder="Enter your phone"
          name="phone"
          value={values.phone}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
      </div>
    </div>
  );
  const workExpBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend developer"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
          value={values.companyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, companyName: event.target.value }))
          }
        />
      </div>
      {/* row2 */}
      <div className={style.row}>
        <InputControl
          label="Certificate Link "
          placeholder="Enter certificate link"
          value={values.certificateLink}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              certificateLink: event.target.value,
            }))
          }
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
          name="address"
          value={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }
        />
      </div>
      {/* row3 */}
      <div className={style.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
      <div className={style.colum}>
        <label>Enter work desciption</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );
  // projectBody
  const projectBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. chat app"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Overview"
          placeholder="Enter overview of project"
          value={values.overview}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, overview: event.target.value }))
          }
        />
      </div>
      {/* row2 */}
      <div className={style.row}>
        <InputControl
          label="Deploy Link "
          placeholder="Enter deploy link of project"
          value={values.deployLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, deployLink: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter github link of project"
          value={values.githubLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, githubLink: event.target.value }))
          }
        />
      </div>

      <div className={style.colum}>
        <label>Enter project desciption</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );
  // education body
  const educationBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. B-tech"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="College/School Name"
          placeholder="Enter name of your college/school"
          value={values.college}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, college: event.target.value }))
          }
        />
      </div>
      {/* row2 */}
      <div className={style.row}>
        <InputControl
          label="Start Date "
          type="date"
          placeholder="Enter start date of this education"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
    </div>
  );
  // achievementsBody
  const achievementBody = (
    <div className={style.detail}>
      <div className={style.colum}>
        <label>List Your Achievements</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );
  // summaryBody
  const summaryBody = (
    <div className={style.detail}>
      <InputControl
        label="Summary"
        placeholder="Enter your objective/summary"
        value={values.summary}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, summary: event.target.value }))
        }
      />
    </div>
  );
  // otherBody
  const otherBody = (
    <div className={style.detail}>
      <InputControl
        label="Other"
        placeholder="Enter something"
        value={values.other}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, other: event.target.value }))
        }
      />
    </div>
  );
  const generateBody = () => {
    switch (section[activeSectionKey]) {
      case section.basicInfo:
        return basicInfoBody;
      case section.workExp:
        return workExpBody;
      case section.project:
        return projectBody;
      case section.education:
        return educationBody;
      case section.achievement:
        return achievementBody;
      case section.summary:
        return summaryBody;
      case section.other:
        return otherBody;
      default:
        return null;
    }
  };
  const handleSubmit = () => {
    switch (section[activeSectionKey]) {
      case section.basicInfo: {
        const tempDetail = {
          image:values.image,
          name: values.name,
          title: values.title,
          linkedinLink: values.linkedinLink,
          githubLink: values.githubLink,
          phone: values.phone,
          email: values.email,
        };
        Props.setInformation((prev) => ({
          ...prev,
          [section.basicInfo]: {
            ...prev[section.basicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        toast.success("Your Information Add Succesfull")
        break;
      }
      case section.workExp: {
        const tempDetail = {
          certificateLink: values.certificateLink,
          title: values.title,
          startDate: values.startDate,
          endDate: values.endDate,
          companyName: values.companyName,
          location: values.location,
          points: values.points,
        };
        const tempDetails = { ...information[section.workExp]?.details };
        tempDetails[activeDetailIndex] = tempDetail;
        Props.setInformation((prev) => ({
          ...prev,
          [section.workExp]: {
            ...prev[section.workExp],
            details: tempDetails,
            sectionTitle,
          },
        }));
        toast.success("Your WorkExperience Add Succesfull")
        break;
      }
      case section.project: {
        const tempDetail = {
          deployLink: values.deployLink,
          title: values.title,
          overview: values.overview,
          githubLink: values.githubLink,
          points: values.points,
        };
        const tempDetails = { ...information[section.project]?.details };
        tempDetails[activeDetailIndex] = tempDetail;
        Props.setInformation((prev) => ({
          ...prev,
          [section.project]: {
            ...prev[section.project],
            details: tempDetails,
            sectionTitle,
          },
        }));
        toast.success("Your Project Details Add Succesfull")
        break;
      }
      case section.education: {
        const tempDetail = {
          title: values.title,
          college: values.college,
          startDate: values.startDate,
          endDate: values.endDate,
        };
        const tempDetails = { ...information[section.education]?.details };
        tempDetails[activeDetailIndex] = tempDetail;
        Props.setInformation((prev) => ({
          ...prev,
          [section.education]: {
            ...prev[section.education],
            details: tempDetails,
            sectionTitle,
          },
        }));
        toast.success("Your Education Details Add Succesfull")

        break;
      }
      case section.achievement: {
        const tempPoints = values.points;
        Props.setInformation((prev) => ({
          ...prev,
          [section.achievement]: {
            ...prev[section.achievement],
            points: tempPoints,
            sectionTitle,
          },
        }));
        toast.success("Your Achievement Details Add Succesfull")
        break;
      }
      case section.summary: {
        const tempDetail = values.summary;
        Props.setInformation((prev) => ({
          ...prev,
          [section.summary]: {
            ...prev[section.summary],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        toast.success("Your Summary Add Succesfull")
        break;
      }
      case section.other: {
        const tempDetail = values.other;
        Props.setInformation((prev) => ({
          ...prev,
          [section.other]: {
            ...prev[section.other],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        toast.success("Your Other Details Add Succesfull")
        break;
      }
    }
  };
  const handleAddNew=()=>{
    const details = active;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    if (!Object.keys(lastDetail).length) return;
    details?.push({});

    Props.setInformation((prev) => ({
      ...prev,
      [section[activeSectionKey]]: {
        ...information[section[activeSectionKey]],
        details: details,
      },
    }));
    setActiveDetailIndex(details?.length - 1);
    
  }
  const handleDeleteDetail=(index)=>{
    const details = active?[...active]:"";
    if (!details) return;
    details.splice(index,1)
    Props.setInformation((prev)=>({
      ...prev,[section[activeSectionKey]]:{
        ...information[section[activeSectionKey]],
        details:details,
      }
    })),
    setActiveDetailIndex((prev)=>(prev=== index? 0: prev-1))
  }
  useEffect(() => {
    const activeInfo = information[section[activeSectionKey]];
    setActiveInformation(activeInfo);
    setSectionTitle(section[activeSectionKey]);
    setActiveDetailIndex(0);
    setValues({
      name: activeInfo?.detail?.name || "",
      image: activeInfo?.detail?.image || "",
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      deployLink: activeInfo?.details
        ? activeInfo.details[0]?.deployLink || ""
        : "",
      certificateLink: activeInfo?.details
        ? activeInfo.details[0]?.certificateLink || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ""
        : "",
      college: activeInfo?.details ? activeInfo.details[0]?.college || "" : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? { ...activeInfo.details[0]?.points }
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",
      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",
      linkedinLink: activeInfo?.detail?.linkedinLink || "",
      githubLink: activeInfo?.details
        ? activeInfo.details[0]?.githubLink || ""
        : activeInfo?.detail?.github || "",
      phone: activeInfo?.detail?.phone || "",
      email: activeInfo?.detail?.email || "",
      summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
      other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
    });
  }, [activeSectionKey]);
  const active=Object.assign([], activeInformation?.details);

  useEffect(() => {
    setActiveInformation(information[section[activeSectionKey]]);
  }, [information]);
  console.log("💕💕",Object.assign([], activeInformation))

  useEffect(()=>{
    const details = activeInformation?.details;
    if (!details) return;

    const activeInfo = information[section[activeSectionKey]];
    setValues({
      image: activeInfo.details[activeDetailIndex]?.image || "",
      overview: activeInfo.details[activeDetailIndex]?.overview || "",
      link: activeInfo.details[activeDetailIndex]?.link || "",
      certificateLink:
        activeInfo.details[activeDetailIndex]?.certificateLink || "",
      companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
      location: activeInfo.details[activeDetailIndex]?.location || "",
      startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
      endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
      points: activeInfo.details[activeDetailIndex]?.points || "",
      title: activeInfo.details[activeDetailIndex]?.title || "",
      linkedinLink: activeInfo.details[activeDetailIndex]?.linkedinLink || "",
      githubLink: activeInfo.details[activeDetailIndex]?.githubLink || "",
      college: activeInfo.details[activeDetailIndex]?.college || "",
    });
  },[activeDetailIndex])
  return (
    <div className={style.container}>
      <div className={style.header}>
        {Object.keys(section)?.map((key) => (
          <div
            key={key}
            className={`${style.section} ${
              activeSectionKey === key ? style.active : ""
            }`}
            onClick={() => setActiveSectionKey(key)}
          >
            {section[key]}
            
          </div>
        ))}
      </div>
      <div className={style.body}>
        <InputControl
          label="Title"
          placeholder="Enter section title"
          value={sectionTitle}
          onChange={(event) => setSectionTitle(event.target.value)}
        />
        <div className={style.chips}>
          { active?active?.map((item, index) => (
                <div
                  className={`${style.chip} ${
                    activeDetailIndex === index ? style.active : ""
                  }`}
                  key={item.title+index}
                  onClick={() => setActiveDetailIndex(index)}
                >
                  <p>
                    {section[activeSectionKey]} {index + 1}
                    
                  </p>
                  <X  onClick={(event) => {
                      event.stopPropagation();
                      handleDeleteDetail(index);
                    }}/>
                </div>
              ))
           :""}
           {
            active && active.length >0 ?(
              <div className={style.new} onClick={handleAddNew}>+New</div>
            ):""
           }
        </div>
        {generateBody()}
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
}
