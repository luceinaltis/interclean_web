import React from "react";

import { Dropbar } from "@/components/elements";
import { Collapse } from "react-collapse";

import styles from "@/public/css/modules/downloads.module.css";

export default function Downloads({ downloadsData, menuOpened, openMenu }) {
    return (
        <>
            <div className="container">
                <div className="inner__container">
                    <Dropbar menuName="Downloads" opened={menuOpened} openMenu={openMenu} />
                    <Collapse isOpened={menuOpened}>
                        <ul>
                            {downloadsData &&
                                downloadsData.map((value, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={value[0]} target="_blank">
                                                {value[1]}
                                            </a>
                                            <span>{" " + value[2]}</span>
                                        </li>
                                    );
                                })}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </>
    );
}