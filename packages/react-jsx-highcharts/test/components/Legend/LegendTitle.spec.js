import React from 'react';
import LegendTitle from '../../../src/components/Legend/LegendTitle';
import { createMockProvidedChart } from '../../test-utils'

describe('<Legend.Title />', () => {
  let testContext;

  beforeEach(() => {
    testContext = {};
    const { chartStubs, getChart } = createMockProvidedChart();
    testContext.chartStubs = chartStubs;

    testContext.propsFromProviders = {
      getChart
    };
  });

  describe('when mounted', () => {
    it('add legend using the Highcharts update method', () => {
      mount(<LegendTitle {...testContext.propsFromProviders}>My Legend Title</LegendTitle>);
      expect(testContext.chartStubs.update).toHaveBeenCalledWith({
        legend: {
          title: expect.objectContaining({
            text: 'My Legend Title'
          })
        }
      }, true);
    });

    it('updates the legend with the passed props', () => {
      mount(
        <LegendTitle style={{ color: 'red' }} {...testContext.propsFromProviders}>My Legend Title</LegendTitle>
      );
      expect(testContext.chartStubs.update).toHaveBeenCalledWith({
        legend: {
          title: expect.objectContaining({
            text: 'My Legend Title',
            style: { color: 'red' }
          })
        }
      }, true);
    });
  });

  describe('update', () => {
    it('should use the update method when props change', () => {
      const wrapper = mount(
        <LegendTitle {...testContext.propsFromProviders}>My Legend Title</LegendTitle>
      );
      wrapper.setProps({ children: 'My New Legend Title' });
      expect(testContext.chartStubs.update).toHaveBeenCalledWith(expect.objectContaining({
        legend: {
          title: {
            text: 'My New Legend Title'
          }
        }
      }), true);
    });
  });

  describe('when unmounted', () => {
    it('should disable the LegendTitle', () => {
      const wrapper = mount(<LegendTitle {...testContext.propsFromProviders}>My Legend Title</LegendTitle>);
      wrapper.unmount();
      expect(testContext.chartStubs.update).toHaveBeenCalledWith(expect.objectContaining({
        legend: {
          title: {
            text: null
          }
        }
      }), true)
    });
  });
});
