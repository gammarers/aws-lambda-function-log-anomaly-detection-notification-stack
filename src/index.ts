import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface LambdaFunctionLogAnomalyDetectionNotificationStackProps extends StackProps {
}

export class LambdaFunctionLogAnomalyDetectionNotificationStack extends Stack {
  constructor(scope: Construct, id: string, props: LambdaFunctionLogAnomalyDetectionNotificationStackProps) {
    super(scope, id, props);
  }
}