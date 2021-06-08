import React from 'react';
import {Line} from 'react-chartjs-2';

export default class Graphs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: this.props.state_population.slice(1).map(state => state.year).sort((a,b) => a.year - b.year),
            datasets: [
              {
                label: this.props.state_population[0],
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.props.state_population.slice(1).map(state => state.population).sort((a,b) => a.year - b.year)
              }
            ]
          }
      }
  render() {
console.log(this.props)
    return (
      <div>
        <Line
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
