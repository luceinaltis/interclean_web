import Head from "next/head";
import React, { useRef, useEffect } from "react";
import { withTranslation } from "../../i18n";
import Title from "@/components/layout/wash-systems/title";

// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

function LocateDistributor({ t }) {
    const container = useRef();
    useEffect(() => {
        const { kakao: asd } = window;
        const options = {
            center: new asd.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };

        const map = new asd.maps.Map(container.current, options);

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch("인천광역시 연수구 송도동 214", function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords,
                });

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            }
        });
    }, []);
    return (
        <div>
            <Header />
            <Title titleString={t("title")} />
            <div className="container">
                <div className="inner__container">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h1>{t("p1")}</h1>
                    <p>&nbsp;</p>
                    <ul>
                        <li>{t("p2")}</li>
                        <li>{t("p3")}</li>
                        <li>{t("p4")}</li>
                    </ul>
                    <p>&nbsp;</p>
                    <div ref={container} style={{ width: "100%", height: "400px" }}></div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

LocateDistributor.getInitialProps = async () => ({
    namespacesRequired: ["location", "footer", "header"],
});

export default withTranslation("location")(LocateDistributor);
