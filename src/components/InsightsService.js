import React, { useState, useEffect } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";
import Insights from "./Insights";
import "../components/CSS/insight.css";
import DummyDataPayment from "./DummyDataPayment";

const colors = ["#1B1116", "#773B5A", "#92592D", "#D0A06A", "#CCCCCC"];


const InsightsService = () => {
  const [paymentData, setPaymentData] = useState([]);
  useEffect(() => {
    setPaymentData(DummyDataPayment);
  }, []);

  const calculateMonthlyTotal = () => {
    const monthlyTotals = {};

    paymentData.forEach((payment) => {
      const paymentDate = new Date(payment.pay_date);
      const month = paymentDate.getMonth();
      const year = paymentDate.getFullYear();
      const monthYearKey = `${month}-${year}`;

      if (monthlyTotals[monthYearKey]) {
        monthlyTotals[monthYearKey] += payment.pay_total;
      } else {
        monthlyTotals[monthYearKey] = payment.pay_total;
      }
    });

    return Object.entries(monthlyTotals).map(([monthYearKey, total]) => {
      const [month, year] = monthYearKey.split("-");
      const monthLabel = new Date(Date.UTC(year, month, 1)).toLocaleString(
        "default",
        { month: "short" }
      );
      return {
        monthYear: monthYearKey,
        month: monthLabel,
        total: parseFloat(total.toFixed(2)),
      };
    });
  };

  const data = calculateMonthlyTotal();

  return (
    <>
      <div className="insights-container">
        <div>
          <h1>OverView</h1>
          <Row>
            <Col className="insights-col">
              <h5>Employees</h5>
              {/*  <h2>{countEmp}</h2> */}
              <h2>06</h2>
            </Col>

            <Col className="insights-col">
              <h5>Registered Animals</h5>
              {/*   <h2>{countAnimal}</h2> */}
              <h2>26</h2>
            </Col>

            <Col className="insights-col">
              <h5>Registered Users</h5>
              <h2>16</h2>
              {/*         <h2>{countUsers}</h2> */}
            </Col>
            <Col className="insights-col chart-next">
              <h5>Inpatients</h5>
              <h2>03</h2>
              {/*     <h2>{countInpatient}</h2> */}
            </Col>
          </Row>

          <Row>
            <Col className="insights-col chart"> 
            <h2>Monthly Payments</h2>
              <ResponsiveContainer width="100%" height={300}> 
              
                <PieChart style={{ backgroundColor: "#F0F0F0" , marginBottom: "120px"}}>
                  <Pie    
                    data={data} 
                    dataKey="total" 
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"  
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}
                      />
                    ))} 
                  </Pie>
                  <Legend verticalAlign="bottom" height={36} />
                  
                </PieChart> 
              </ResponsiveContainer> 
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row> 
          <Row>
            <Col className="insights-col chart-next ">
              <h5>All Items</h5>
              <h2>20</h2>
              {/*             <h2>{countItem}</h2> */}
            </Col>

            <Col className="insights-col chart-next ">
              <h5>Suppliers</h5>
              <h2>08</h2>
              {/*    <h2>{countSupplier}</h2> */}
            </Col>
          </Row>

          <Row>
            <Col className="insights-col">
              <h5>Ongoing Order</h5>
              <h2>12</h2>
              {/*         <h2>{countOrder}</h2> */}
            </Col>
          </Row>
          <Row>
            <Col className="insights-col">
              <h5>Ongoing Appointments</h5>
              <h2>09</h2>
              {/*      <h2>{countAppointment}</h2> */}
            </Col>

            <Col className="insights-col">
              <h5>Vaccine</h5>
              <h2>16</h2>
              {/*   <h2>{countEmp}</h2> */}
            </Col>
          </Row>
        </div>
      </div>

      <Insights />
      <tbody>{Insights()}</tbody>
    </>
  );
};

export default InsightsService;











/* const [service, setService] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/income/");
      setService(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);

console.log(service); // Check if data is fetched correctly

const [asideActive, setAsideActive] = useState(false);

const toggleAside = () => {
  setAsideActive(!asideActive);
};

const [countEmp, setCountEmp] = useState(0);

useEffect(() => {
  axios
    .get("http://localhost:5000/employee/get/count")
    .then((response) => {
      console.log(response);
      setCountEmp(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const [countAdmission, setCountAdmission] = useState(0);

useEffect(() => {
  axios
    .get("http://localhost:5000/admission/get/count")
    .then((response) => {
      console.log(response);
      setCountAdmission(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const [countAnimal, setCountAnimal] = useState(0);

useEffect(() => {
  axios
    .get("http://localhost:5000/animal/get/count")
    .then((response) => {
      console.log(response);
      setCountAnimal(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const [countAppointment, setCountAppointment] = useState(0);

useEffect(() => {
  axios
    .get("http://localhost:5000/appointments/get/count")
    .then((response) => {
      console.log(response);
      setCountAppointment(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const [countAccounts, setCountAccounts] = useState(0);

useEffect(() => {
  axios
    .get("http://localhost:5000/accounts/get/count")
    .then((response) => {
      console.log(response);
      setCountAccounts(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const [countInpatient, setCountInpatient] = useState(0);

useEffect(() => {
  axios
    .get("http://localhost:5000/inpatient/get/count")
    .then((response) => {
      console.log(response);
      setCountInpatient(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const [countItem, setCountItem] = useState(0);

useEffect(() => {
  axios
    .get("http://localhost:5000/item/get/count")
    .then((response) => {
      console.log(response);
      setCountItem(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const [countOrder, setCountOrder] = useState(0);

useEffect(() => {
  axios
    .get("http://localhost:5000/adminOrder/get/count")
    .then((response) => {
      console.log(response);
      setCountOrder(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const [countService, setCountService] = useState(0);

useEffect(() => {
  axios
    .get("http://localhost:5000/service/get/count")
    .then((response) => {
      console.log(response);
      setCountService(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const [countShelter, setCountShelter] = useState(0);

useEffect(() => {
  axios
    .get("http://localhost:5000/shelters/get/count")
    .then((response) => {
      console.log(response);
      setCountShelter(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const [countSupplier, setCountSupplier] = useState(0);

useEffect(() => {
  axios
    .get("http://localhost:5000/supplier/get/count")
    .then((response) => {
      console.log(response);
      setCountSupplier(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const [countUsers, setCountUsers] = useState(0);

useEffect(() => {
  axios
    .get("http://localhost:5000/users/get/count")
    .then((response) => {
      console.log(response);
      setCountUsers(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const [countVaccine, setCountVaccine] = useState(0);

useEffect(() => {
  axios
    .get("http://localhost:5000/vaccine/get/count")
    .then((response) => {
      console.log(response);
      setCountVaccine(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []); */
