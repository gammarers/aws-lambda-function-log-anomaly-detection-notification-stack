import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { LambdaFunctionLogAnomalyDetectionNotificationStack } from '../src';

describe('LambdaFunctionLogAnomalyDetectionNotificationStack default Testing', () => {

  const app = new App();

  const stack = new LambdaFunctionLogAnomalyDetectionNotificationStack(app, 'LambdaFunctionLogAnomalyDetectionNotificationStack', {
  });

  const template = Template.fromStack(stack);

  it('Should match snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });
});
