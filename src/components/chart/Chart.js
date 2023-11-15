import ChartBar from './ChartBar';
import './Chart.css';
const Chart = props => {
  // const valueArray = props.dataPoint.map(dataPoint => dataPoint.value);
  // // const totalMaimum = Math.max(...valueArray);

 return <div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar 
        value={dataPoint.value}
         maxValue={2} 
         lable={dataPoint.lable}
         key={dataPoint.lable} />
       )}
     </div>
}

export default Chart;