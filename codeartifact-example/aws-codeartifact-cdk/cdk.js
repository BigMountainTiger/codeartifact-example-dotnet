#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { AwsCodeartifactCdkStack } = require('./stacks/aws-codeartifact-cdk-stack');

const app = new cdk.App();
new AwsCodeartifactCdkStack(app, 'Experiment-CodeArtifactCdk-Stack', {});