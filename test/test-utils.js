import sinon from 'sinon';

export const createMockAxis = () => ({
  remove: sinon.stub(),
  addPlotBand: sinon.stub(),
  removePlotBand: sinon.stub(),
  update: sinon.stub()
});

export const createMockSeries = () => ({
  remove: sinon.stub(),
  setData: sinon.stub(),
  setVisible: sinon.stub(),
  update: sinon.stub()
});

export const createMockChart = () => ({
  addAxis: sinon.stub(),
  addSeries: sinon.stub(),
  get: sinon.stub(),
  update: sinon.stub(),
  setTitle: sinon.stub()
});