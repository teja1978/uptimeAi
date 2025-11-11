import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribution-graph',
  template: `<div echarts [options]="chartOptions" class="chart"></div>`,
  styleUrls: ['./contribution-graph.component.css']
})
export class ContributionGraphComponent implements OnInit {
  chartOptions: any;

  ngOnInit() {
    // Generate 7x52 random contribution data
    const data = [];
    for (let week = 0; week < 52; week++) {
      for (let day = 0; day < 7; day++) {
        data.push([week, day, Math.floor(Math.random() * 6)]);
      }
    }

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', '', 'Feb', '', 'Mar', '', 'Apr', '', 'May', '', 'Jun', '', 'Jul', '', 'Aug', '', 'Sep', '', 'Oct', '', 'Nov', '', 'Dec'];

    this.chartOptions = {
      tooltip: {
        backgroundColor: '#24292e',
        textStyle: { color: '#fff' },
        formatter: (params: any) => {
          const [week, day, count] = params.data;
          return `${days[day]} (Week ${week + 1})<br/><b>${count}</b> contributions`;
        }
      },
      grid: {
        top: 40,
        left: 40,
        right: 20,
        bottom: 40
      },
      xAxis: {
        type: 'category',
        data: Array.from({ length: 52 }, (_, i) => months[Math.floor(i / 4)] || ''),
        position: 'top',
        axisLine: { show: false },
        axisTick: { show: false },
        splitArea: { show: false },
        axisLabel: {
          color: '#57606a',
          fontSize: 12,
          interval: 3
        }
      },
      yAxis: {
        type: 'category',
        data: days,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: '#57606a',
          fontSize: 11,
          interval: (index: number) => index % 2 === 0 // Show Sun, Tue, Thu, Sat
        }
      },
      visualMap: {
        min: 0,
        max: 5,
        orient: 'horizontal',
        left: 'center',
        bottom: 2,
        text: ['More', 'Less'], // 👈 Label for color scale
        inRange: {
          color: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127']
        },
        show: true
      },
      series: [
        {
          type: 'heatmap',
          data,
          label: { show: false },
          itemStyle: {
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#fff'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 5,
              shadowColor: 'rgba(0,0,0,0.3)',
              borderColor: '#333'
            }
          }
        }
      ]
    };
  }
}
