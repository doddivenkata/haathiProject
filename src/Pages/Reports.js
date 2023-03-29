import React from "react";
import { Row, Col } from "antd";
import CustomerReportIcon from "../assets/images/icons/Customer_report_unav.svg";
import FinanceReportIcon from "../assets/images/icons/Finance_report_icon_unavailable.svg";
import RevenueReportIcon from "../assets/images/icons/Revenue_report_icon_available.svg";
import SalesReportIcon from "../assets/images/icons/Sales_report_icon_unavailable.svg";
import { SquareBoxs } from "../ReUsedComponents/FooterBar";
import ReportsCards from "../components/Reports/ReportsCards";

const Report = () => {
  const count = [
    {
      id: "1",
      color:
        "linear-gradient(180deg, rgba(128, 194, 141, 0.49) 0%, rgba(128, 194, 141, 0.147) 100%)",
      title: "Customer Report",
      Status: "Available",
      image: CustomerReportIcon,
    },
    {
      id: "2",
      color:
        "linear-gradient(180deg, #FEEED1 0%, rgba(254, 238, 209, 0.3) 100%)",
      title: "Finance Report",
      Status: "Available",
      image: FinanceReportIcon,
    },
    {
      id: "3",
      color:
        "linear-gradient(180deg, #DAE7F5 0%, rgba(218, 231, 245, 0.3) 100%)",
      title: "Revenue Report",
      Status: "Lack of data",
      image: RevenueReportIcon,
    },
    {
      id: "4",
      color:
        "linear-gradient(180deg, rgba(128, 194, 141, 0.5) 0%, rgba(128, 194, 141, 0.15) 100%)",
      title: "Sales Report",
      Status: "Available",
      image: SalesReportIcon,
    },
    {
      id: "5",
      color:
        "linear-gradient(180deg, #FEEED1 0%, rgba(254, 238, 209, 0.3) 100%)",
      title: "Custom Report",
      Status: "Customise your personal reports",
      image: <SquareBoxs />,
    },
  ];

  return (
    <div className="scroll">
      <Row gutter={[12, 12]}>
        {count.map((items, index) => (
          <Col>
            <ReportsCards items={items} key={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Report;
