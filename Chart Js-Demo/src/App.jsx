import './App.css';
import {Chart,defaults} from 'chart.js/auto';
import {Bar,Doughnut,Line,Pie} from 'react-chartjs-2';

defaults.maintainAspectRatio=false;
defaults.responsive=true;
defaults.plugins.title.display=true;
defaults.plugins.title.align='center';
defaults.plugins.title.font.size=20;
defaults.plugins.title.color='black';

function App() {
  // data for bar chart and pie chart
  let myData=[
    {
      'label':'earn',
      'value':300
    },
    {
      'label':'expense',
      'value':200
    },
    {
      'label':'save',
      'value':100
    }
  ]

  // data for line chart
  let lineData=[
    {
      'label':'jan',
      'earn':500,
      'save':200
    },
    {
      'label':'feb',
      'earn':350,
      'save':150
    },
    {
      'label':'mar',
      'earn':400,
      'save':200
    },
    {
      'label':'apr',
      'earn':650,
      'save':350
    },
    {
      'label':'may',
      'earn':300,
      'save':100
    },
    {
      'label':'jun',
      'earn':350,
      'save':150
    },
    {
      'label':'jul',
      'earn':400,
      'save':200
    },
    {
      'label':'aug',
      'earn':650,
      'save':350
    },
    {
      'label':'sep',
      'earn':300,
      'save':100
    }
    
  ]

  return (
    <>
    <h1>Bar Chart</h1>
    <div className='main'>
      <div className="div">
        <Bar
          data={
            {
              labels:['Product1','Product2','Product3'],
              datasets:[
                {
                  label:'price',
                  data:[100,200,300],
                },
                {
                  label:'profit',
                  data:[50,100,150],
                }

                ]
            }
          }
          options={{
            plugins:{
              title:{
                text:'Hard code bar'
              },
            },
          }
        }
        />
      </div>
      <div className="div">
        <Bar
          data={
              {
              labels: myData.map(item=>item.label),
              datasets:[
              {
                label:'amounts',
                data: myData.map(item=>item.value),
                backgroundColor:[
                  'orange','purple','blue'
                  ],
                borderRadius:20,
              }
              ]
              }
           }
           options={{
            plugins:{
              title:{
                text:'Data code bar'
              },
            },
          }
        } 
        />
      </div>
    </div>
    {/* ------------------------------------------------------------------------------------- */}
    <h1>Pie Chart</h1>
    <div className='main'>
      <div className="div">
        <Doughnut
          data={
            {
              labels:['Product1','Product2','Product3'],
              datasets:[
                {
                  label:'price',
                  data:[100,200,300],
                },
                {
                  label:'profit',
                  data:[50,100,150],
                }
                ]
            }
          }
          options={{
            plugins:{
              title:{
                text:'Hard code pie'
              },
            },
          }
        }
        />
      </div>
      <div className="div">
        <Doughnut
          data={
              {
            labels: myData.map(item=>item.label),
            datasets:[
              {
                label:'amounts',
                data: myData.map(item=>item.value),
                backgroundColor:[
                  'orange','purple','blue'
                  ],
                borderColor:'black'
              }
              ]
              }
           } 
           options={{
            plugins:{
              title:{
                text:'Data code pie'
              },
            },
          }
        }
        />
      </div>
    </div>
    {/* ------------------------------------------------------------------------------------- */}
    <h1>Line Chart</h1>
    <div className='main'>
      <div className="div">
        <Line
          data={
            {
              labels:['Product1','Product2','Product3'],
              datasets:[
                {
                  label:'price',
                  data:[100,200,300],
                },
                {
                  label:'profit',
                  data:[50,100,150],
                }
                ]
            }
          }
          options={{
            plugins:{
              title:{
                text:'Hard code line'
              },
            },
          }
        }
        />
      </div>
      <div className="div">
        <Line
          data={
              {
            labels: lineData.map(item=>item.label),
            datasets:[
              {
                label:'Earn',
                data: lineData.map(item=>item.earn),
                backgroundColor:'blue',
                borderColor:'blue'
              },
              {
                label:'Save',
                data: lineData.map(item=>item.save),
                backgroundColor:'purple',
                borderColor:'purple'
              }
              ]
              }
           } 
           options={{
            plugins:{
              title:{
                text:'Data code line'
              },
            },
            elements:{
              line:{
                tension:0.3,
              }
            }
          }
        }
        />
      </div>
    </div>
     {/* ------------------------------------------------------------------------------------- */}
    <h1>Pie Chart</h1>
    <div className='main'>
      <div className="div">
        <Pie
          data={
            {
              labels:['Product1','Product2','Product3'],
              datasets:[
                {
                  label:'price',
                  data:[100,200,300],
                },
                ]
            }
          }
          options={{
            plugins:{
              title:{
                text:'Hard code pie'
              },
            },
          }
        }
        />
      </div>
    </div>
    </>
  )
}


export default App
