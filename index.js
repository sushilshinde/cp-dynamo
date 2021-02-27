var copy = require("copy-dynamodb-table").copy;

var globalAWSConfig = {
  // AWS Configuration object http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
};

console.log(globalAWSConfig)

copy(
  {
    config: globalAWSConfig, // config for AWS
    source: {
      tableName: "MemberAggregatedSkills", // required
    },
    destination: {
      tableName: "MemberAggregatedSkillsNewETL", // required
    },
    log: true, // default false
    create: true, // create destination table if not exist
  },
  function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log(result);
  }
);
