import { useState } from "react";

// Layouts
import { Header, Footer } from "@/components/layout";

import { CheckBox, ContactHead, InputData } from "@/components/layout/contact";
import Title from "@/components/layout/wash-systems/title";

export default function Index() {
  const [checkedData, setCheckedData] = useState({ object: "Truck Wash" });
  const [inputData, setInputData] = useState({});

  const checkList = [
    "Truck Wash",
    "Mining & Oil Wash",
    "Chemicals",
    "Bus Wash",
    "Military Wash",
    "Spare Parts",
    "Train Wash",
    "Speciality Wash",
    "Service",
    "Aircraft Wash",
    "Tire, Wheel & Chassis Wash",
    "Other",
  ];

  const dataList = [
    "Country",
    "State/Province",
    "City",
    "Company Name",
    "Address",
    "Zip/Postal Code",
    "Sender Name",
    "Title",
    "Where did you hear about us?",
    "Phone",
    "Email",
    "Newsletter Signup",
  ];

  const necessaryList = [
    "Country",
    "State/Province",
    "City",
    "Company Name",
    "Sender Name",
    "Phone",
    "Email",
  ];

  return (
    <div>
      <Header />
      <Title titleString="CONTACT US" />
      <ContactHead />
      <CheckBox
        checkList={checkList}
        selected={checkedData.object}
        selectElement={(element) =>
          setCheckedData({ ...checkedData, object: element })
        }
        inputText={(text) => setCheckedData({ ...checkedData, text: text })}
      />
      <InputData
        dataList={dataList}
        necessaryList={necessaryList}
        data={inputData}
        updateData={setInputData}
      />
      <Footer />
    </div>
  );
}
