import ReactApexChart from "react-apexcharts";
import { Card, List, Col, Row, Typography, Avatar } from "antd";
import heart from "../../assets/images/shopify.png";
import request from "../../assets/images/shopify.png";
import avgrevenue from "../../assets/images/shopify.png";
import datafile from "../../assets/images/shopify.png";
import { PlusOutlined,} from "@ant-design/icons";
const mins = [
  <svg
    width="10"
    height="10"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 10C5 9.44772 5.44772 9 6 9L14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11L6 11C5.44772 11 5 10.5523 5 10Z"
      className="fill-danger"
    ></path>
  </svg>,
];
const { Title, Paragraph } = Typography;
const customer = [
  {
    today: "Users Right Now ",
    title: "800",
    persent: "+30%",
    icon: request,
    bnb: "bnb2",
  },
  {
    today: "New Revenue",
    title: "12000",
    persent: "+20%",
    icon: avgrevenue,
    bnb: "bnb2",
  },
  {
    today: "New Users",
    title: "+1,200",
    persent: "-20%",
    icon: heart,
    bnb: "redtext",
  },
  {
    today: "Data Files",
    title: "20,000",
    persent: "10%",
    icon: datafile,
    bnb: "bnb2",
  },
];
const lineChart = {
  series: [
    {
      name: "Revenue in $",
      data: [10, 41, 35, 51, 49, 45, 30, 60, 95, 100, 95, 105],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Monthly Revenue",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};
const areaChart = {
  series: [
    {
      name: "No of Files Received",
      data: [10, 21, 35, 41, 59, 62, 60, 70, 85, 80, 90, 88],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    title: {
      text: "Data Files Received",
      align: "left",
    },
    subtitle: {
      text: "",
      align: "left",
    },
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    xaxis: {
      type: "month",
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: "left",
    },
  },
};
const radialBarChart = {
  series: [56, 70, 60, 75],
  options: {
    chart: {
      height: 390,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    title: {
      text: "Profit Category wise",
      align: "left",
    },
    colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
    labels: ["Sales", "Finance", "Operations", "Marketing"],
    legend: {
      show: true,
      floating: true,
      fontSize: "12px",
      position: "left",
      offsetX: 80,
      offsetY: 30,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  },
};
const barChart = {
  series: [
    {
      name: "New Users",
      data: [140, 155, 157, 156, 161, 158, 163, 160, 166],
    },
    {
      name: "Old Users",
      data: [76, 85, 95, 98, 87, 65, 91, 114, 94],
    },
    {
      name: "Total Users",
      data: [216, 240, 252, 254, 248, 223, 254, 274, 260],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "New Users-Old Users-Total Users",
      align: "left",
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      title: {
        text: "",
      },
    },
    fill: {
      opacity: 1,
    },

    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  },
};
const columnChart = {
  series: [
    {
      name: "Profit%",
      data: [200, 250, 280, 300, 350, 380, 420, 450, 480, 490, 500, 550],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Day Wise Traffic",
      align: "left",
    },
    xaxis: {
      categories: [
        "12 Jan",
        "13 Jan",
        "14 Jan",
        "15 Jan",
        "16 Jan",
        "17 Jan",
        "18 Jan",
        "19 Jan",
        "20 Jan",
        "21 Jan",
        "22 Jan",
        "23 Jan",
      ],
    },
  },
};
const repeatUsersChart = {
  series: [
    {
      name: "First Time",
      data: [150, 165, 145, 132, 138, 132],
    },
    {
      name: "Returning",
      data: [180, 200, 195, 220, 200, 230],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Repeat Customer Rate",
      align: "left",
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2023-01-23T00:00:00.000Z",
        "2023-01-23T04:30:00.000Z",
        "2023-01-23T08:30:00.000Z",
        "2023-01-23T12:30:00.000Z",
        "2023-01-23T16:30:00.000Z",
        "2023-01-23T20:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};

const newest = [
  {
    avatar: mins,
    title: "Direct",
    description: "-5%",
    amount: "- 100",
    textclass: "text-light-danger",
    amountcolor: "text-danger",
  },
  {
    avatar: <PlusOutlined style={{ fontSize: 10 }} />,
    title: "Search",
    description: "+ 7.5%",
    amount: "+ 210",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
  {
    avatar: <PlusOutlined style={{ fontSize: 10 }} />,
    title: "Social",
    description: "+ 6.3",
    amount: "+ 175",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
  {
    avatar: <PlusOutlined style={{ fontSize: 10 }} />,
    title: "Refferal",
    description: "+ 5.5%",
    amount: "+ 120",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
  {
    avatar: <PlusOutlined style={{ fontSize: 10 }} />,
    title: "Email",
    description: "+ 6%",
    amount: "+ 147",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
];
const countryWise = [
  {
    title: "USA",
    increase: "-2%",
    amount: "- 100",
    textclass: "text-light-danger",
    amountcolor: "text-danger",
  },
  {
    title: "India",
    increase: "+7.5%",
    amount: "+ 200",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
  {
    title: "UK",
    increase: "+6.3",
    amount: "+ 300",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
  {
    title: "Germany",
    increase: "+ 5.5%",
    amount: "+ 250",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
  {
    title: "Italy",
increase: "+ 6%",
    amount: "+ 220",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
  {
    title: "Spain",
increase: "-2.5%",
    amount: "-150",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
  
];
const deviceTypeUsers = [
  {
    title: "Desktop",
   
    count: "3000",
    textclass: "text-light-danger",
    amountcolor: "text-danger",
  },
  {
    title: "Mobile",
    
    count: "8000",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
  {
    title: "Tablet",
    increase: "+6.3",
    count: "5000",
    textclass: "text-fill",
    amountcolor: "text-success",
  },

  
];
function LineChart() {
  return (
    <div id="chart">
      <ReactApexChart
        options={lineChart.options}
        series={lineChart.series}
        type="line"
        height={350}
      />
    </div>
  );
}
function AreaChart() {
  return (
    <div id="chart">
      <ReactApexChart
        options={areaChart.options}
        series={areaChart.series}
        type="area"
        height={350}
      />
    </div>
  );
}
function RadialBarChart() {
  return (
    <div id="chart">
      <ReactApexChart
        options={radialBarChart.options}
        series={radialBarChart.series}
        type="radialBar"
        height={350}
      />
    </div>
  );
}
function BarChart() {
  return (
    <div id="chart">
      <ReactApexChart
        options={barChart.options}
        series={barChart.series}
        type="bar"
        height={350}
      />
    </div>
  );
}
function ColumnChart() {
  return (
    <div id="chart">
      <ReactApexChart
        options={columnChart.options}
        series={columnChart.series}
        type="bar"
        height={350}
      />
    </div>
  );
}

function RepeatUsers() {
  return (
    <div id="chart">
      <ReactApexChart
        options={repeatUsersChart.options}
        series={repeatUsersChart.series}
        type="area"
        height={350}
      />
    </div>
  );
}
function Newest() {
  return (
    <Card
      bordered={false}
      bodyStyle={{ paddingTop: 0 }}
      className="header-solid h-full  ant-list-yes"
      title={<h6 className="font-semibold m-0">Sales by Traffic Source</h6>}
      extra={
        <p className="card-header-date">
          <span>23 - 30 Jan 2022</span>
        </p>
      }
    >
      {" "}
      <List
        // header={<h6>NEWEST</h6>}
        className="transactions-list ant-newest"
        itemLayout="horizontal"
        dataSource={newest}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar size="small" className={item.textclass}>
                  {item.avatar}
                </Avatar>
              }
              title={item.title}
              description={item.description}
            />
            <div className="amount">
              <span className={item.amountcolor}>{item.amount}</span>
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
}
function CountryWise() {
  return (
    <Card
      bordered={false}
      bodyStyle={{ paddingTop: 0 }}
      className="header-solid h-full  ant-list-yes"
      title={<h6 className="font-semibold m-0">Users by Location</h6>}
    >
      <List
        // header={<h6>NEWEST</h6>}
        className="transactions-list ant-newest"
        itemLayout="horizontal"
        dataSource={countryWise}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.title} />
            <div className="amount" style ={{display:"flex",flexDirection: "row",
justifyContent: "space-around", flexGrow:"1"}}>
            
              <span className={item.amountcolor} style ={{fontSize:"13px"}}> {item.increase}</span>
              <span >{item.amount}</span>
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
}
function DeviceTypeUsers(){
  return(
    <Card
      bordered={false}
      bodyStyle={{ paddingTop: 0 }}
     
      title={<h6 className="font-semibold m-0">Users by Device</h6>}
    >
      <List
        // header={<h6>NEWEST</h6>}
        className="transactions-list ant-newest"
        itemLayout="horizontal"
        dataSource={deviceTypeUsers}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.title} />
            <div className="amount">
            
             
              <span >{item.count}</span>
            </div>
          </List.Item>
        )}
      />
    </Card>
  )
}
function SalesDashboard() {
  const { Title } = Typography;
  return (
    <div className="layout-content">
      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mb-24">
          <Row gutter={[24, 0]}>
            {customer.map((c) => (
              <Col xs={24} sm={24} md={24} lg={12} xl={6} className="mb-24">
                <Card bordered={false} className="criclebox ">
                  <div className="number">
                    <Row align="middle" gutter={[24, 0]}>
                      <Col xs={18}>
                        <span>{c.today}</span>
                        <Title level={3}>
                          {c.title} <small className={c.bnb}>{c.persent}</small>
                        </Title>
                      </Col>
                      <Col xs={6}>
                        <div
                          className="icon-box"
                          style={{
                            backgroundColor: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={c.icon}
                            width="40"
                            height="40"
                            alt={c.name}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} className="mb-24">
          <Card bordered={false} className="criclebox h-full">
            <LineChart />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} className="mb-24">
          <Card bordered={false} className="criclebox h-full">
            <AreaChart />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} className="mb-24">
          <Card bordered={false} className="criclebox h-full">
            <RadialBarChart />
          </Card>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} className="mb-24">
          <Newest />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} className="mb-24">
          <Card bordered={false} className="criclebox h-full">
            <RepeatUsers />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} className="mb-24">
          <Card bordered={false} className="criclebox h-full">
            <CountryWise />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} className="mb-24">
          <Card bordered={false} className="criclebox h-full">
          <DeviceTypeUsers/>
          </Card>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
          <Card bordered={false} className="criclebox h-full">
            <BarChart />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
          <Card bordered={false} className="criclebox h-full">
            <ColumnChart />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default SalesDashboard;