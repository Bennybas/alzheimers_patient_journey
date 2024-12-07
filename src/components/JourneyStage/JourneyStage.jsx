import React, { useState } from 'react';
import { Card } from '../ui/card';
import {
  ArrowRight, Stethoscope, Building2, User, LineChart as LineChartIcon,
  ClipboardCheck, AlertTriangle, ChevronDown, ChevronUp
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
  Line,PieChart,Pie,Cell,
} from 'recharts';
import SankeyDiagram from '../Sankey/SankeyDiagram'
import StateCaregivingMap from '../usa/Map'


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

  // Transform the insights data for visualizations
  const getChartData = () => {
    switch (stage.number) {
      case 1: {
        const question_data = [
          { name: "Every day", percentage: 19 },
          { name: "Every few days", percentage: 34 },
          { name: "Once a week", percentage: 18 },
          { name: "Every two weeks", percentage: 12 },
          { name: "Once a month", percentage: 10 },
          { name: "Less than once a month", percentage: 8 }
        ];
        const ageGroupData = [
          { name: '65-74 Years', value: 26.4 },
          { name: '75-84 Years', value: 38.6 },
          { name: '85+ Years', value: 35.4 },
        ];

        return {
          type:'line',
          question_data:question_data,
          ageGroupData:ageGroupData

        }
        
  
      }
      case 2: {
        const Specialist_availability =[
          {
            name: 'Almost no specialists',
            value: 6,
          },
          {
            name: 'Not enough specialists',
            value: 49,
          },
          {
            name: 'Enough specialists',
            value: 35,
          },
          {
            name: 'More than enough specialists',
            value: 7,
          },
          {
            name: 'Unsure or never refer',
            value: 3,
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
        return{
          type:'bar',
          Specialist_availability:Specialist_availability,
          agedata:agedata,
          caregivers:caregivers,
          Comorbid:Comorbid

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
            { name: 'Medicare', value: 45 },
            { name: 'Medicaid', value: 19 },
            { name: 'Out of pocket', value: 25 },
            { name: 'Other', value: 11 },
          ];


          return{
            type:'pie',
            deathdata:deathdata,
            mortality:mortality,
            caregivers1:caregivers1,
            insurance:insurance
          }
      }
      default:
        return null;
    }
  };

  const renderChartInsights = () => {
    const chartConfig = getChartData();
    if (!chartConfig) return null;

    const { type, agedata,Specialist_availability,question_data,deathdata,ageGroupData,mortality,caregivers,caregivers1,insurance,Comorbid } = chartConfig;

    switch (type) {
      case 'line':
      return (
        <div className="w-full space-y-6">
          <SankeyDiagram />

          <div className="grid grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-sm font-bold text-gray-700 mb-4">Frequency of PCP Receiving Alzheimer’s Questions (Age 65 and Above)</h3>
              <div className="aspect-[4/3] w-full">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={question_data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="percentage" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
              </div>

            </Card>
            <Card className="p-6">
            <h3 className="text-sm font-bold text-gray-700 mb-4">Age 65 and older with Alzheimer’s</h3>
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

            </Card>
          </div>
        </div>
      );

      case 'bar':
        return (
          <div className="w-full space-y-6">
            <div className="grid grid-cols-2 gap-8">
            <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">Specialist Availability to Meet Patient Demand</h4>
              <div className="aspect-[4/3] w-full">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={Specialist_availability}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#ffb74d" />
                </BarChart>
              </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6">
            <h4 className="text-sm font-medium text-gray-700">Estimated Lifetime Risk for Alzheimer’s</h4>
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
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-8">
          <Card className="p-6">
            <h4 className="text-sm font-medium text-gray-700">Impact of Alzheimer's on Comorbid Chronic Diseases</h4>
              <div className="aspect-[4/3] w-full">
              {/* <ResponsiveContainer width="100%" height={300}>
                <BarChart
                      data={caregivers}
                      margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                      }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="activity" />
                <YAxis label={{ value: 'Percentage', angle: -90, position: 'insideLeft' }} domain={[0, 55]}/> 
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
                <Bar dataKey="alzheimers" name="Caregivers of people with Alzheimer's or other dementias" fill="#4c2464" />
                <Bar dataKey="other" name="Caregivers of other older people" fill="#4eb9a0" />
                </BarChart>
                </ResponsiveContainer> */}

                <ResponsiveContainer width="105%" height={400}>
                  <BarChart
                        data={Comorbid}
                        margin={{
                          top: 20, right: 30, left: 20, bottom: 95, //Increased bottom margin
                        }}
                  >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="condition" angle={-23} textAnchor="end" interval={0} height={90}/> {/* Adjusted label properties */}
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
          </div>
          
            
          </div>
          
        );

        case 'pie':
          return (
            <div className="w-full space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <Card className="p-6">
                  <h4 className="text-sm font-medium text-gray-700">Mortality Rate By Age and Year</h4>
                  <div className="aspect-[4/3] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        width={500}
                        height={300}
                        data={deathdata}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" /> {/* Lighter grid */}
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="45-54" stroke="#3498db" strokeWidth={2} /> 
                        <Line type="monotone" dataKey="55-64" stroke="#2ecc71" strokeWidth={2} /> 
                        <Line type="monotone" dataKey="65-74" stroke="#f39c12" strokeWidth={2} /> 
                        <Line type="monotone" dataKey="75-84" stroke="#e74c3c" strokeWidth={2} /> 
                        <Line type="monotone" dataKey="85+" stroke="#9b59b6" strokeWidth={2} /> 
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Card>


                <Card className="p-6">
                  <h4 className="text-sm font-medium text-gray-700">Mortality Rate By(per 100000 patients ) Year</h4>
                  <div className="aspect-[4/3] w-full">
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                      data={mortality}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" label={{ value: "Year", position: "insideBottom", dy: 10 }} />
                      <YAxis label={{ value: "Mortality Rate", angle: -90, position: "insideLeft" }} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="rate"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  </div>
                </Card>


                
              </div>

              <div className="grid grid-cols-2 gap-8">
                <Card className="p-6">
                  <h4 className="text-sm font-medium text-gray-700">Health Profiles of Dementia Caregivers vs. Non-Caregivers</h4>
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
                    <Bar dataKey="nonDementiaCaregivers" name="Non-Dementia Caregivers" fill="#8884d8" /> {/* Added another bar */}
                    <Bar dataKey="nonCaregivers" name="Non-Caregivers" fill="#82ca9d" /> {/* Added another bar */}
                    </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>


                <Card className="p-6">
                  <h4 className="text-sm font-medium text-gray-700">Alzheimer's Care: Payment Source Distribution</h4>
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
              <div className="grid grid-cols-1 gap-8">
                <StateCaregivingMap />

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
              <p className="text-sm text-purple-700 mt-1">{stage.timeframe}</p>
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

        <p className="text-gray-700 mb-6 leading-relaxed">{stage.description}</p>

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