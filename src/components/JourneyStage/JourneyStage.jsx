import React, { useState } from 'react';
import { Card } from '../ui/card';
import {
  ArrowRight, Stethoscope, Building2, User, LineChart as LineChartIcon,
  ClipboardCheck, AlertTriangle, ChevronDown, ChevronUp,FolderSearch2,MessageCircleQuestion,MessageCircle,
  TheaterIcon
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,LineChart,
  Line,PieChart,Pie,Cell,AreaChart,Area,LabelList,ScatterChart,Scatter,ZAxis,BoxPlot
} from 'recharts';
import SankeyDiagram from '../Sankey/SankeyDiagram'
import StateCaregivingMap from '../usa/Map'
import ChatbotButton from './ChatBot'
import SideEffectsAdherenceChart from '../Charts/SideEffects'
import Therapies from '../Charts/Therapies';
import PCPPieChart from '../Charts/Specialists';
import BarriersToMCIChart from '../Charts/Barriers';
import IncorrectDiagnosesChart from '../Charts/Incorrect';
import ReasonsForSCDChart from '../Charts/SCD';
import TreatmentDistribution from '../Charts/TreatmentFlow';
import TherapyMetrics from '../Charts/TherapyMetrics';
import NonAdheherence from '../Charts/NonAdheherence';
import Cognitive from '../Charts/Cognitive';
import AlzheimerStagesPieChart from '../Charts/Stages';
import DiagnosisTimeline from '../Charts/DiagnosisTime';
import SymptomsBarChart from '../Charts/Symptoms';
import ScreeningReason from '../Charts/ScreeningReason';
import AgeDistributionBarChart from '../Charts/AgeDistribution';
import DrugDiscontinuationRates from '../Charts/DrugDiscontinue';
import AssessmentBarChart from '../Charts/Assesment';
import AverageWaitingTimeChart from '../Charts/WaitingTime';
import DrugSwitch from '../Charts/SwitchRate';
import AdherenceChart from '../Charts/Adherence';
import CaregiverChart from '../Charts/CareGiver';
import DelayChart from '../Charts/DelayChart';
import HospitalizationBarChart from '../Charts/Hospitalization';
import AgitationPieChart from '../Charts/Agitation';
<<<<<<< HEAD
import DrugChangeHeatmap from '../Charts/DrugChangeReasons';
=======
>>>>>>> 24b7c0817e1a7f25615cc0196bee43e029866967


const JourneyStage = ({ stage, metrics, barriers, findings }) => {
  const [hoveredAction, setHoveredAction] = useState(null);
  const [showInsights, setShowInsights] = useState(false);

  const handleActionHover = (actionName) => {
    setHoveredAction(actionName);
  };

  const handleActionLeave = () => {
    setHoveredAction(null);
  };

  const toggleInsights = () => {
    setShowInsights(!showInsights);
  };

  // Colors for charts
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088FE'];
  const COLORS1 = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];
  const colors_for_health = ['#8884d8', '#82ca9d', '#ffc658', '#ff6347'];
  const COLORS2 = ['#0088FE', '#00C49F'];
  const colorScale = (value) => {
    if (value < 30) return "#d4e157"; // Light green
    if (value < 50) return "#ffee58"; // Yellow
    return "#ef5350"; // Red
  };
  const CustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Transform the insights data for visualizations
  const getChartData = () => {
    switch (stage.number) {
      case 1: {
        const question_data = [
          { name: "1", percentage: 19 },
          { name: "2-3", percentage: 34 },
          { name: "7", percentage: 18 },
          { name: "14", percentage: 12 },
          { name: "30", percentage: 10 },
          { name: ">30", percentage: 8 }
        ];
        const ageGroupData = [
          { name: '65-74 Years', value: 26.4 },
          { name: '75-84 Years', value: 38.6 },
          { name: '85+ Years', value: 35.4 },
        ];
        const projected = [
          { year: 2020, "Ages 65–74": 2, "Ages 75–84": 4, "Ages 85+": 6.1 },
          { year: 2030, "Ages 65–74": 2.5, "Ages 75–84": 4.5, "Ages 85+": 8.5 },
          { year: 2040, "Ages 65–74": 3, "Ages 75–84": 5.2, "Ages 85+": 11.2 },
          { year: 2050, "Ages 65–74": 3.2, "Ages 75–84": 6.3, "Ages 85+": 12.7 },
          { year: 2060, "Ages 65–74": 3.5, "Ages 75–84": 6.7, "Ages 85+": 13.8 },
        ];

        const alzheimersData  =[ { x: 3, y: 1 }, { x: 6, y: 2 }, { x: 9, y: 3 }, { x: 12, y: 4 }, { x: 15, y: 5 }, { x: 18, y: 6 }, { x: 21, y: 7 }, { x: 24, y: 8 }, { x: 27, y: 9 }, { x: 30, y: 10 }, ];
        
        const demographic= [
          { x: '20-29', y: 'Male', value: 80 },
          { x: '20-29', y: 'Female', value: 75 },
          { x: '30-39', y: 'Male', value: 70 },
          { x: '30-39', y: 'Female', value: 65 },
          { x: '40-49', y: 'Male', value: 60 },
          { x: '40-49', y: 'Female', value: 55 },
          { x: '50-59', y: 'Male', value: 50 },
          { x: '50-59', y: 'Female', value: 45 },
          { x: '60-69', y: 'Male', value: 40 },
          { x: '60-69', y: 'Female', value: 35 },
          { x: '70-79', y: 'Male', value: 30 },
          { x: '70-79', y: 'Female', value: 25 },
          { x: '80-89', y: 'Male', value: 20 },
          { x: '80-89', y: 'Female', value: 15 },
        ];
        
        
        return{
          type:'line',
          question_data:question_data,
          ageGroupData:ageGroupData,
          projected:projected,
          alzheimersData:alzheimersData,
          demographic:demographic


        }
        
  
      }
      case 2: {
        const Specialist_availability =[
          {
            name: '1',
            value: 6,
          },
          {
            name: '1-5',
            value: 49,
          },
          {
            name: '6-10',
            value: 35,
          },
          {
            name: '10+',
            value: 7,
          },
         
        ];
        const agedata = [
          {
            name: 'Age 45',
            men: 10.3,
            women: 19.5,
          },
          {
            name: 'Age 65',
            men: 11.6,
            women: 21.1,
          },
        ];

        const caregivers =[
          {
            activity: 'Getting in and out\nof beds and chairs',
            alzheimers: 45,
            other: 43,
          },
          {
            activity: 'Getting\ndressed',
            alzheimers: 38,
            other: 30,
          },
          {
            activity: 'Bathing or\nshowering',
            alzheimers: 34,
            other: 23,
          },
          {
            activity: 'Feeding',
            alzheimers: 33,
            other: 20,
          },
          {
            activity: 'Getting to and\nfrom the toilet',
            alzheimers: 32,
            other: 25,
          },
          {
            activity: 'Dealing with\nincontinence',
            alzheimers: 32,
            other: 12,
          },
        ];

        const Comorbid=[
          {
            condition: 'PulmonaryDisease',
            withAlzheimer: 816,
            withoutAlzheimer: 606,
          },
          {
            condition: 'Congestive\nheart failure',
            withAlzheimer: 774,
            withoutAlzheimer: 668,
          },
          { condition: 'Stroke', withAlzheimer: 722, withoutAlzheimer: 536 },
          {
            condition: 'Chronic\nkidney\ndisease',
            withAlzheimer: 706,
            withoutAlzheimer: 478,
          },
          {
            condition: 'Coronary\nartery\ndisease',
            withAlzheimer: 682,
            withoutAlzheimer: 436,
          },
          { condition: 'Diabetes', withAlzheimer: 666, withoutAlzheimer: 368 },
          { condition: 'Cancer', withAlzheimer: 666, withoutAlzheimer: 366 },
        ];

        const severity =[
          { symptomSeverity: 1, timeToDiagnosis: 120 },
          { symptomSeverity: 2, timeToDiagnosis: 100 },
          { symptomSeverity: 3, timeToDiagnosis: 80 },
          { symptomSeverity: 4, timeToDiagnosis: 60 },
          { symptomSeverity: 5, timeToDiagnosis: 40 },
          { symptomSeverity: 6, timeToDiagnosis: 30 },
          { symptomSeverity: 7, timeToDiagnosis: 20 },
          { symptomSeverity: 8, timeToDiagnosis: 15 },
          { symptomSeverity: 9, timeToDiagnosis: 10 },
          { symptomSeverity: 10, timeToDiagnosis: 5 },
        ];
        
        return{
          type:'bar',
          Specialist_availability:Specialist_availability,
          agedata:agedata,
          caregivers:caregivers,
          Comorbid:Comorbid,
          severity:severity

        }
        
      }
      case 3: {
        const deathdata = [{year: 2000, '45-54': 0.2, '55-64': 2.0, '65-74': 18.7, '75-84': 139.6, '85+': 667.7}, 
          {year: 2002, '45-54': 0.1, '55-64': 1.9, '65-74': 19.6, '75-84': 157.7, '85+': 790.9}, 
          {year: 2004, '45-54': 0.2, '55-64': 1.8, '65-74': 19.5, '75-84': 168.5, '85+': 875.3}, 
          {year: 2006, '45-54': 0.2, '55-64': 2.1, '65-74': 19.9, '75-84': 175.0, '85+': 923.4},
          {year: 2008, '45-54': 0.2, '55-64': 2.2, '65-74': 21.1, '75-84': 192.5, '85+': 1002.2}, 
          {year: 2010, '45-54': 0.3, '55-64': 2.1, '65-74': 19.8, '75-84': 184.5, '85+': 987.1}, 
          {year: 2012, '45-54': 0.2, '55-64': 2.2, '65-74': 17.9, '75-84': 175.4, '85+': 936.1}, 
          {year: 2014, '45-54': 0.2, '55-64': 2.1, '65-74': 19.6, '75-84': 185.6, '85+': 1006.8}, 
          {year: 2016, '45-54': 0.2, '55-64': 2.7, '65-74': 23.6, '75-84': 214.1, '85+': 1216.9}, 
          {year: 2018, '45-54': 0.3, '55-64': 2.9, '65-74': 24.7, '75-84': 213.9, '85+': 1225.3}, 
          {year: 2020, '45-54': 0.2, '55-64': 3.3, '65-74': 28.6, '75-84': 229.3, '85+': 1287.3}, 
          {year: 2021, '45-54': 0.3, '55-64': 3.2, '65-74': 26.4, '75-84': 214.3, '85+': 1243.6}];

          const mortality = [
            { year: "2000", rate: 17.6 },
            { year: "2002", rate: 20.5 },
            { year: "2004", rate: 22.5 },
            { year: "2006", rate: 24.3 },
            { year: "2008", rate: 27.1 },
            { year: "2010", rate: 27.0 },
            { year: "2012", rate: 26.6 },
            { year: "2014", rate: 29.3 },
            { year: "2016", rate: 35.9 },
            { year: "2018", rate: 37.3 },
            { year: "2020", rate: 40.7 },
            { year: "2021", rate: 36.0 },
          ];
          const caregivers1 =[
            { condition: 'Stroke', dementiaCaregivers: 5.2, nonDementiaCaregivers: 3.4, nonCaregivers: 3.2 },
            { condition: 'Coronary heart disease', dementiaCaregivers: 8.3, nonDementiaCaregivers: 7.2, nonCaregivers: 6.6 },
            { condition: 'Cardiovascular disease¹', dementiaCaregivers: 11.8, nonDementiaCaregivers: 9.5, nonCaregivers: 8.6 },
            { condition: 'Diabetes', dementiaCaregivers: 12.8, nonDementiaCaregivers: 11.1, nonCaregivers: 11.3 },
            { condition: 'Cancer', dementiaCaregivers: 14.3, nonDementiaCaregivers: 13.3, nonCaregivers: 11.5 },
            { condition: 'Obesity', dementiaCaregivers: 32.7, nonDementiaCaregivers: 34.6, nonCaregivers: 29.5 },
          ];

          const insurance =[
            { name: 'Medicare', value: 70.31 },
            { name: 'Medicaid', value: 29.69 },
            
          ];

          const healthcare_worker = [
            { category: "Very effective", value: 5, color: "#00C49F" },
            { category: "Somewhat effective", value: 35, color: "#FFBB28" },
            { category: "Not too effective", value: 50, color: "#FF8042" },
            { category: "Not at all effective", value: 10, color: "#D0D0D0" },
          ];
          
          const barrierData = [
            {
              barrier: "Dementia Caregiver Resources",
              description: "Lack of community resources for dementia caregivers",
              barrier: 77,
              extremeBarrier: 44,
            },
            {
              barrier: "Care Coordination Payment",
              description: "Payment models do not incentivize care coordination",
              barrier: 70,
              extremeBarrier: 41,
            },
            {
              barrier: "Healthcare Social Workers",
              description: "Insufficient trained healthcare social workers",
              barrier: 50,
              extremeBarrier: 10,
            },
            {
              barrier: "Nurse Practitioners",
              description: "Shortage of trained nurse practitioners",
              barrier: 29,
              extremeBarrier: 3,
            }
          ];        
          const treatmentdata = [
            { name: 'Rivastigmine', value: 1190 },
            { name: 'Donepezil', value: 1073 },
            { name: 'Memantine', value: 941 },
            { name: 'Rivastigmine + Memantine', value: 266 },
            { name: 'Donepezil + Memantine', value: 216 },
            { name: 'Galantamine', value: 164 },
            { name: 'Galantamine + Memantine', value: 56 },
          ];
          
          const treatmentdatainner = [
            { name: 'Monotherapy', value: 3368 },
            { name: 'Dual therapy', value: 538 },
          ];

          const AdhereData = [
            { medicationAdherence: 20, diseaseProgression: 80 },
            { medicationAdherence: 40, diseaseProgression: 70 },
            { medicationAdherence: 60, diseaseProgression: 60 },
            { medicationAdherence: 80, diseaseProgression: 50 },
            { medicationAdherence: 100, diseaseProgression: 40 },
          ];
          
          
        

          return{
            type:'pie',
            deathdata:deathdata,
            mortality:mortality,
            caregivers1:caregivers1,
            insurance:insurance,
            healthcare_worker:healthcare_worker,
            barrierData:barrierData,
            treatmentdata:treatmentdata,
            treatmentdatainner:treatmentdatainner,
            AdhereData:AdhereData

          }
      }
      default:
        return null;
    }
  };

  const renderChartInsights = () => {
    const chartConfig = getChartData();
    if (!chartConfig) return null;

    const calculateIntensity = (barrier, extremeBarrier) => {
      const totalScore = barrier + extremeBarrier;
      return Math.min(totalScore / 100, 1);
    };
    const colors = ['#4F2683', '#8884d8', '#ff5c58', '#ffc658'];

    const { type, agedata,Specialist_availability,question_data,deathdata,ageGroupData,mortality,projected,caregivers1,insurance,Comorbid,healthcare_worker,barrierData,treatmentdatainner,
      treatmentdata,alzheimersData,severity,AdhereData } = chartConfig;


    switch (type) {
      case 'line':
      return (
        <div className="w-full space-y-6">
          <SankeyDiagram />
          <div className="grid grid-cols-2 gap-8">
              <PCPPieChart />
              <Cognitive />
              
          </div>
          <div className="grid grid-cols-2 gap-8">
          <Card className="p-6">
            <ReasonsForSCDChart />
          </Card>
          <Card className="p-6">
            <BarriersToMCIChart />
            </Card>

          </div>
          <div className="grid grid-cols-2 gap-8">
            {/* <Card className="p-6">
              <h3 className="text-sm font-bold text-gray-700 mb-4">Frequency of Alzheimer's Questions to PCPs From Older Patients (Age 65+)</h3>
              <div className="aspect-[4/3] w-full">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={question_data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  
                  
                  <Legend
                    valueKey="Frequency of Days"
                    iconType="circle"  
                  />

                  <Bar dataKey="percentage" fill="#82ca9d" name="Frequency of Days">
                    
                    <LabelList dataKey="percentage" position="top" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              </div>

            </Card> */}
            <Card className="p-6">
            <h3 className="text-sm font-bold text-gray-700 mb-4">Age Distribution of People 65+ With Alzheimer's</h3>
            <div className="aspect-[4/3] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  data={ageGroupData}
                  cx="50%"
                  cy="50%"
                  label={true} 
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value" // Changed to 'value'
                >
                  {ageGroupData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            </div>

            </Card> <IncorrectDiagnosesChart />

          </div>
          <div className="grid grid-cols-2 gap-8">
            {/* <Card className="p-6">
            <div style={{ width: "100%", height: 500 }}>
                <h3 style={{ textAlign: "center", fontWeight: "bold"}}>
                Projected Alzheimer's Cases in U.S. Adults 65+
                </h3>
                <p style={{ textAlign: "center", color: "gray", fontSize: "14px" }}>
                  Millions of people
                </p>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={projected}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="Ages 65–74"
                      stackId="1"
                      stroke="#5CCDC4"
                      fill="#5CCDC4"
                    />
                    <Area
                      type="monotone"
                      dataKey="Ages 75–84"
                      stackId="1"
                      stroke="#F5B841"
                      fill="#F5B841"
                    />
                    <Area
                      type="monotone"
                      dataKey="Ages 85+"
                      stackId="1"
                      stroke="#4F2683"
                      fill="#4F2683"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card> */}

           
           

          </div>

          {/* <div className="grid grid-cols-2 gap-8">
            <Card className="p-6">
            <div style={{ width: "100%", height: 500 }}>
                <h3 style={{ textAlign: "center", fontWeight: "bold"}}>
                Correlation between Patient Demographics and Initial Treatment Response 
                </h3>
                <div style={{ width: "100%", height: "400px" }}>
                  <HeatMap
                    xLabels={xLabels}
                    yLabels={yLabels}
                    data={data}
                    xLabelsLocation="bottom"
                    xLabelWidth={60}
                    yLabelWidth={80}
                    cellRender={(value) => value && <div>{value}</div>}
                    cellStyle={(value) => ({
                      background: `rgb(255, ${255 - value * 2}, ${255 - value * 2})`,
                      color: "black",
                      fontWeight: "bold",
                    })}
                  />
                </div>

            </div>
            </Card>
          </div> */}

        </div>
      );

      case 'bar':
        return (
          <div className="w-full space-y-6">
            <div className="grid grid-cols-1 gap-8">
            <DiagnosisTimeline />
            </div>
            <div className="grid grid-cols-3 gap-8">
              <AlzheimerStagesPieChart />
              <SymptomsBarChart />
              <AverageWaitingTimeChart />
              
            </div>
            <div className="grid grid-cols-2 gap-8">
              
              <ScreeningReason />
              <AssessmentBarChart />
            </div>
            <div className="grid grid-cols-2 gap-8">
            <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">Perceived Specialist Availability to Meet Patient Demand</h4>
              <div className="aspect-[4/3] w-full">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={Specialist_availability}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend verticalAlign='bottom' />
                  <Bar dataKey="value" fill="#ffb74d" name='Number of Specialist per 100000 people' />
                </BarChart>
              </ResponsiveContainer>
              </div>
            </Card>

            <AgeDistributionBarChart />

            {/* <Card className="p-6">
            <h4 className="text-sm font-medium text-gray-700">Estimated Lifetime Risk of Alzheimer's by Gender and Age </h4>
            <div className="aspect-[4/3] w-full">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={agedata}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="men" fill="#ffb74d" />
                <Bar dataKey="women" fill="#9c27b0" />
              </BarChart>
            </ResponsiveContainer>

            </div>
            </Card> */}
          </div>

          {/* <div className="grid grid-cols-2 gap-8">
          <Card className="p-6">
            <h4 className="text-sm font-medium text-gray-700">Impact of Alzheimer's on Hospital Stays for Common Comorbid Conditions</h4>
              <div className="w-full">

                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                        data={Comorbid}
                        margin={{
                          top: 20, right: 30, left: 10, 
                        }}
                  >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="condition" angle={-23} textAnchor="end" interval={0} height={90}/>
                  <YAxis label={{ value: 'Hospital stays', angle: -90, position: 'insideLeft' }} domain={[0, 1000]}/>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                  <Bar
                          dataKey="withAlzheimer"
                          name="With Alzheimer's or other dementias"
                          fill="#4c2464"
                        />
                  <Bar
                          dataKey="withoutAlzheimer"
                          name="Without Alzheimer's or other dementias"
                          fill="#4eb9a0"
                        />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div> */}
          
            
          </div>
          
        );

        case 'pie':
          return (
            <div className="w-full space-y-8">
              <div className="grid gap-8">
                <TreatmentDistribution />
              </div>
              
              <div className="grid gap-8">
                <DrugSwitch />
              </div>
<<<<<<< HEAD
              <div className="grid gap-8">
              <DrugDiscontinuationRates />
              </div>
=======
>>>>>>> 24b7c0817e1a7f25615cc0196bee43e029866967
              
              <div className="grid gap-8">
                <TherapyMetrics />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <NonAdheherence />
<<<<<<< HEAD
                
=======
                <DrugDiscontinuationRates />
>>>>>>> 24b7c0817e1a7f25615cc0196bee43e029866967
              </div>
              <div className="grid grid-cols-2 gap-8">

                <Card className="p-6">
                  <h2 className="text-lg font-bold text-grey-700">SideEffects and Adherence</h2>
                  <div className="aspect-[4/3] w-full">
                  < SideEffectsAdherenceChart />
                  </div>
                </Card>

                <DelayChart />
                {/* <Card className="p-6">
                  <h4 className="text-lg font-bold mb-4 text-center text-gray-700">Health Profiles of Dementia Caregivers vs. Non-Caregivers</h4>
                  <div className="aspect-[4/3] w-full">
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                          data={caregivers1}
                          margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                          }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="condition" angle={-22} textAnchor="end" interval={0} height={80}/>
                    <YAxis label={{ value: 'Percentage', angle: -90, position: 'insideLeft' }}/>
                    <Tooltip />
                    <Legend verticalAlign="bottom" />
                    <Bar dataKey="dementiaCaregivers" name="Dementia Caregivers" fill="#4c2464" />
                    <Bar dataKey="nonDementiaCaregivers" name="Non-Dementia Caregivers" fill="#8884d8" />
                    <Bar dataKey="nonCaregivers" name="Non-Caregivers" fill="#82ca9d" /> 
                    </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card> */}
                
              </div>

              <div className="grid grid-cols-2 gap-8">
                
              <Card className="p-6">
              <div className="p-4">
                  <h3 className="text-lg font-bold mb-4 text-gray-800">Healthcare Barriers Analysis</h3>
                  <div className="space-y-3">
                    {barrierData.map((item, index) => (
                      <div key={index} className="mb-2">
                        <div className="flex items-center">
                          {/* Barrier Label */}
                          <div className="w-1/4 text-sm font-semibold text-gray-800">
                            {item.barrier}
                          </div>
                          {/* Progress Bar Container */}
                          <div className="flex-grow flex space-x-1">
                            {/* Barrier Intensity */}
                            <div
                              className="bg-blue-500 h-4 rounded -ml-24"
                              style={{ width: `${item.barrier}%` }}
                            />
                            {/* Extreme Barrier Intensity */}
                            <div
                              className="bg-red-500 h-4 rounded"
                              style={{ width: `${item.extremeBarrier}%` }}
                            />
                          </div>
                          {/* Total Value */}
                          <div className="text-xs text-gray-600 ml-2">
                            {item.barrier + item.extremeBarrier}
                          </div>
                        </div>
                        {/* Description always visible */}
                        <div className="text-xs text-gray-500 mt-1 ml-4">
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-xs text-center text-gray-500">
                    <span className="mr-2">🔵Seen as Barrier</span>
                    <span>🔴 Seen as Extreme Barrier</span>
                  </div>
                </div>
              </Card>

                <Card className="p-6">
                  <h4 className="text-lg font-bold mb-4 text-center text-gray-700">Payment Source Distribution</h4>
                  <div className="aspect-[4/3] w-full">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                    <Pie
                            data={insurance}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={true}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                    >
                            {insurance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                    </Pie>
                    <Legend /> {/* Include the legend */}
                    </PieChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
              <div className="grid grid-cols-2 gap-8">
              {/* <Card className="p-6">
                <div style={{ width: "100%", height: 400 }}>
                  <h3 style={{ textAlign: "center", fontWeight: "bold"}}>
                    Effectiveness of Dementia Care Navigation
                  </h3>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={healthcare_worker} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category"  />
                      <YAxis tickFormatter={(tick) => `${tick}%`} />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend layout="horizontal" align="center" verticalAlign="bottom" />
                      <Bar 
                        dataKey="value" 
                        name="Healthcare Worker Effectiveness" 
                        fill="#00C49F" 
                        stackId="a" 
                        data={healthcare_worker}
                        isAnimationActive={false} 
                      />
                    </BarChart>
                  </ResponsiveContainer>

                </div>
              </Card> */}

              {/* <AdherenceChart /> */}
              <CaregiverChart />
              <HospitalizationBarChart />
              </div>
              
              {/* <div className="grid grid-cols-1 gap-8">
                <StateCaregivingMap />

              </div> */}
<<<<<<< HEAD
              <div className="grid grid-cols-2 gap-8">
                <AgitationPieChart />
                <DrugChangeHeatmap />
=======
              <div className="grid grid-cols-1 gap-8">
                <AgitationPieChart />
>>>>>>> 24b7c0817e1a7f25615cc0196bee43e029866967
              </div>

              
              
            </div>
          );

      default:
        return null;
    }
  };
  const [hoveredSection, setHoveredSection] = useState(null);
  const getTranslateClass = (section) => {
    if (hoveredSection === 'metrics' && section !== 'metrics') return 'translate-x-3';
    if (hoveredSection === 'barriers') {
      if (section === 'metrics') return '-translate-x-3';
      if (section === 'opportunities') return 'translate-x-3';
    }
    if (hoveredSection === 'opportunities') {
      if (section === 'metrics' || section === 'barriers') return '-translate-x-3';
    }
    return '';
  };

  const renderLink = (link) => {
  if (!link) return null;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        marginLeft: "5px",
        padding: "2px 4px",
        borderRadius: "15px",
        fontSize: "10px",
        fontWeight: "bold",
        backgroundColor: "#9f9f9f",
        color: "#ffffff",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#000000")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#9f9f9f")}
    >
      {link.name || "link"}
    </a>
  );
};
const [isChatOpen, setIsChatOpen] = useState(false);
  const [defaultMessage, setDefaultMessage] = useState("");
  const [conversation, setConversation] = useState([
    {
      id: 1,
      text: "Hi! I'm AIVY, your healthcare assistant. Ask me anything about your patient journey.",
      sender: "bot",
    },
  ]);

  const handleChatToggle = () => {
    const newMessage = ``;
    setDefaultMessage(newMessage);
    if (!isChatOpen) {
      setIsChatOpen(true);
    }
  };

  const handlePromptClick = () => {
    const newMessage = `Provide a comprehensive and well-structured explanation of the ${stage.title} phase in the Alzheimer's Patient Journey.`;
    setDefaultMessage(newMessage);
    if (!isChatOpen) {
      setIsChatOpen(true);
    }
  };

  const handlePromptClick2 = () => {
    const newMessage = `Provide a comprehensive and well-structured explanation of the barriers in ${stage.title} phase in the Alzheimer's Patient Journey.`;
    setDefaultMessage(newMessage);
    if (!isChatOpen) {
      setIsChatOpen(true);
    }
  };

  const sendMessage = async (message, setSuggestedQuestions) => {
    const trimmedMessage = message.trim();
    if (trimmedMessage === "") return;

    const newUserMessage = {
        id: Date.now(),
        text: trimmedMessage,
        sender: "user",
    };

    setConversation((prev) => [...prev, newUserMessage]);
    const botResponseId = Date.now() + 1;
    
    try {
       
        const initialBotMessage = { 
            id: botResponseId, 
            text: "Thinking...", 
            sender: "bot",
            loading: true 
        };
        setConversation((prev) => [...prev, initialBotMessage]);

        const backendUrl = "https://alz-backend-1.onrender.com/chat";
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000);

        const response = await fetch(backendUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: trimmedMessage }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (!response.body) {
            throw new Error("Response body is null");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullResponse = "";
        let responseTimeout = setTimeout(() => {
            reader.cancel();
            throw new Error("Response timeout - no data received for 30 seconds");
        }, 30000);

        while (true) {
            const { done, value } = await reader.read();
            
            if (done) {
                clearTimeout(responseTimeout);
                break;
            }

            // Reset timeout on each chunk
            clearTimeout(responseTimeout);
            responseTimeout = setTimeout(() => {
                reader.cancel();
                throw new Error("Response timeout - no data received for 30 seconds");
            }, 30000);

            const chunk = decoder.decode(value);
            const events = chunk.split("\n\n");

            for (const event of events) {
                if (event.startsWith("data: ")) {
                    const content = event.replace("data: ", "").trim();

                    if (content === "[DONE]") {
                        continue;
                    }

                    try {
                        const parsedContent = JSON.parse(content);
                        fullResponse = parsedContent.message.replace(/\\n/g, '\n');
                        
                        setConversation((prev) =>
                            prev.map((msg) =>
                                msg.id === botResponseId 
                                    ? { ...msg, text: fullResponse, loading: false } 
                                    : msg
                            )
                        );

                        if (parsedContent.suggested_questions?.length > 0) {
                            setSuggestedQuestions(parsedContent.suggested_questions);
                        }
                    } catch (parseError) {
                        console.error("Error parsing response:", parseError);
                        throw new Error("Failed to parse server response");
                    }
                }
            }
        }
    } catch (error) {
        const errorMessage = error.name === 'AbortError' 
            ? "Request timed out. Please try again."
            : `Error: ${error.message}. Please try again.`;

        setConversation((prev) =>
            prev.map((msg) =>
                msg.id === botResponseId
                    ? { ...msg, text: errorMessage, loading: false, error: true }
                    : msg
            )
        );
        
        setSuggestedQuestions([]);
    }
};

  return (
    <div className="relative w-full">
      <Card className="bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 p-6 mb-6 shadow-lg rounded-lg border border-purple-200 transition-all duration-300 hover:shadow-xl">
        {/* Stage header and actions section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-md transform transition-transform hover:scale-105">
              <span className="text-2xl font-bold text-white">{stage.number}</span>
              
            </div>
            <div>
              <h2 className="text-xl font-bold text-purple-900">{stage.title}</h2>
              <p className="text-sm text-purple-700 mt-1 pr-4">{stage.timeframe}</p>
             
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={toggleInsights}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg active:transform active:scale-95"
            >
              Deep Dive
              {showInsights ? (
                <ChevronUp className="w-4 h-4 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 transition-transform" />
              )}
            </button>
          </div>
        </div>
        <div className='flex'>
          <p className="text-gray-700 mb-6 leading-relaxed pr-4">{stage.description}</p>
          <div className="relative inline-block">
            <div className="relative group inline-block">
              <MessageCircleQuestion
                onClick={handlePromptClick}
                className="cursor-pointer text-gray-600 hover:text-purple-600 transition-colors duration-200 ease-in-out"
              />
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap">
                Ask AIVY
              </div>
            </div>

            <div className="fixed bottom-6 right-6 z-50">
              <button
                onClick={handleChatToggle}
                className="bg-purple-600 text-white p-4 rounded-full shadow-2xl hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-6 h-6" />
              </button>
            </div>

            {isChatOpen && (
              <ChatbotButton
                isChatOpen={isChatOpen}
                setIsChatOpen={setIsChatOpen}
                predifinedPrompt={defaultMessage}
                conversation={conversation}
                setConversation={setConversation}
                sendMessage={sendMessage}
              />
            )}
          </div>


        </div>
       
        {/* Actions Flow */}
        <div className="flex items-center gap-4 mb-6">
          {stage.actions.map((action, idx) => (
            <React.Fragment key={idx}>
              <div
                className="flex-1 bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-purple-50 cursor-pointer transform hover:-translate-y-1"
                onMouseEnter={() => handleActionHover(action.name)}
                onMouseLeave={handleActionLeave}
              >
                <div className="text-sm font-medium text-purple-900">{action.name}</div>
              </div>
              {idx < stage.actions.length - 1 && (
                <ArrowRight className="w-6 h-6 text-purple-400 flex-shrink-0 animate-pulse" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Hovered Action Details */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          hoveredAction ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          {hoveredAction && (
            <div className="bg-purple-50 p-4 rounded-lg shadow-inner mt-4 border border-purple-100">
              <h3 className="text-purple-800 font-semibold mb-2">
                {hoveredAction}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {stage.actions.find(action => action.name === hoveredAction)?.content}
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* Insights Section - Now positioned correctly */}
      {showInsights && (
        <div className="mb-8">
          <Card className="bg-white rounded-lg shadow-lg p-6">
            {renderChartInsights()}
          </Card>
        </div>
      )}


      

      {/* Key Metrics, Barriers, and Findings Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Key Metrics Section */}
        <div 
          className={`col-span-3 transition-transform duration-300 ease-in-out ${getTranslateClass('metrics')}`}
          onMouseEnter={() => setHoveredSection('metrics')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <Card className="h-full p-5 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <LineChartIcon className="w-4 h-4" />
              Impact Measures
            </h3>
            <div className="space-y-3">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-xl font-bold text-blue-600">{metric.value}</div>
                  <div className="text-xs leading-relaxed">
                    {metric.label ? (
                      <>
                        {metric.label}
                        {renderLink(metric.link)}
                      </>
                    ) : (
                      "No label available"
                    )}
                  </div>
                </div>
              ))}
            </div>

          </Card>
        </div>

        {/* Key Barriers Section */}
        <div 
          className={`col-span-6 transition-transform duration-300 ease-in-out ${getTranslateClass('barriers')}`}
          onMouseEnter={() => setHoveredSection('barriers')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <Card className="h-full p-5 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="font-semibold mb-3 text-gray-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Key Barriers
              <div className="relative group inline-block">
                <MessageCircleQuestion 
                  onClick={handlePromptClick2} 
                  className="cursor-pointer text-gray-600 hover:text-purple-600 transition-colors duration-200 ease-in-out" 
                />
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap">
                  Ask AIVY
                </div>
              </div>

            </h3>
            
            <KeyBarriers barriers={barriers} />
          </Card>
        </div>

        {/* Key Opportunities Section */}
        <div 
          className={`col-span-3 transition-transform duration-300 ease-in-out ${getTranslateClass('opportunities')}`}
          onMouseEnter={() => setHoveredSection('opportunities')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <Card className="h-full p-5 bg-gradient-to-b from-purple-50 to-purple-100 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
              <ClipboardCheck className="w-4 h-4" />
              Emerging Prospects
            </h3>
            <div className="space-y-3">
              {findings.map((finding, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-sm text-gray-700">
                    <div className="font-semibold text-gray-900 mb-2">{finding.description}</div>
                    {finding.subpoints && finding.subpoints.length > 0 && (
                      <ul className="list-disc pl-5 space-y-1">
                        {finding.subpoints.map((subpoint, subIdx) => (
                          <li key={subIdx} className="text-xs font-bold leading-relaxed">{subpoint}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
      
      <div className="absolute left-8 bottom-0 w-0.5 h-8 bg-purple-200" />
      
      
    </div>
  );
};

const KeyBarriers = ({ barriers }) => {
  const barrierColors = {
    physician: {
      background: 'bg-red-50',
      headerBg: 'bg-red-100',
      icon: 'text-red-600',
      borderColor: 'border-red-200'
    },
    system: {
      background: 'bg-blue-50',
      headerBg: 'bg-blue-100',
      icon: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    patient: {
      background: 'bg-green-50',
      headerBg: 'bg-green-100',
      icon: 'text-green-600',
      borderColor: 'border-green-200'
    }
  };

  return (
    <div className="space-y-6">
      {Object.entries(barriers).map(([key, barrierGroup], groupIdx) => {
        const colors = barrierColors[key];

        return (
          <div 
            key={groupIdx} 
            className={`rounded-xl shadow-md overflow-hidden ${colors.background}`}
          >
            <div 
              className={`w-full flex items-center gap-3 px-5 py-4 ${colors.headerBg}`}
            >
              {key === 'physician' && <Stethoscope className={`w-5 h-5 ${colors.icon}`} />}
              {key === 'system' && <Building2 className={`w-5 h-5 ${colors.icon}`} />}
              {key === 'patient' && <User className={`w-5 h-5 ${colors.icon}`} />}
              <h3 className="text-base font-semibold capitalize text-gray-800">{key} Barriers</h3>
            </div>

            <div className={`p-5 border-t ${colors.borderColor}`}>
              <ul className="space-y-4">
                {barrierGroup.map((barrier, idx) => (
                  <li 
                    key={idx} 
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                  <div className="p-4">
                    {barrier.subpoints && (
                      <ul className="space-y-2">
                        {barrier.subpoints.map((subpoint, subIdx) => (
                          <li key={subIdx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-purple-500 mt-1">•</span>
                            <span className="text-xs font-bold text-gray-700">
                             
                              {typeof subpoint === 'object' ? (
                                <>
                                  {subpoint.text} 
                                  {subpoint.link && ( 
                                    <a
                                      href={subpoint.link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        marginLeft: "5px",
                                        padding: "2px 4px",
                                        borderRadius: "15px",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        backgroundColor: "#9f9f9f",
                                        color: "#ffffff",
                                        textDecoration: "none",
                                      }}
                                      onMouseEnter={(e) => (e.target.style.backgroundColor = "#000000")}
                                      onMouseLeave={(e) => (e.target.style.backgroundColor = "#9f9f9f")}
                                    >
                                      {subpoint.link.name || "link"} {/* Display link name */}
                                    </a>
                                  )}
                                </>
                              ) : (
                                
                                subpoint
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>


                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default JourneyStage;