import React, { useRef, useEffect } from "react";
import { withTranslation } from "../../i18n";
import Title from "@/components/layout/wash-systems/title";
import Email from "../../components/email";

// Layouts
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

function LocateDistributor({ t }) {
    const container = useRef();
    useEffect(() => {
        const { kakao } = window;
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 4,
        };

        const map = new kakao.maps.Map(container.current, options);

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        var mapTypeControl = new kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

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
                    <Email />
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h1 name="location">{t("p2")}</h1>
                    <p>&nbsp;</p>
                    <ul>
                        <li>{t("p3")}</li>
                        <li>{t("p4")}</li>
                        <li>{t("p5")}</li>
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
    namespacesRequired: ["location", "footer", "header", "email"],
});

export default withTranslation("location")(LocateDistributor);
