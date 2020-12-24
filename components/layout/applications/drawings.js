import React from "react";

import { Dropbar } from "@/components/elements";
import { Collapse } from "react-collapse";

import styles from "@/public/css/modules/drawings.module.css";

export default function Drawings({ drawingsData, menuOpened, openMenu }) {
    return (
        <>
            <div className="container">
                <div className="inner__container">
                    <Dropbar menuName="DRAWINGS" opened={menuOpened} openMenu={openMenu} />
                    <Collapse isOpened={menuOpened}>
                        <ul>
                            {drawingsData &&
                                drawingsData.map((value, index) => {
                                    return (
                                        <li key={index} style={{ marginLeft: 30, marginTop: 10 }}>
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
