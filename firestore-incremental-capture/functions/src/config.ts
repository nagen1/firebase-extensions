export default {
  dataset: "backupData",
  table: "syncData",
  syncDataset: "syncData",
  syncTable: "syncData",
  datasetLocation: "us",
  runInitialBackup: true,
  syncCollectionPath: process.env.SYNC_COLLECTION_PATH!,
  statusCollectionName: "status",
  backupCollectionName: "backups",
  syncCollectionName: "sync",
  bucketName: "dev-extensions-testing.appspot.com",
  bucketPath: "backups",
  location: process.env.LOCATION!,
  projectId: process.env.PROJECT_ID!,
  instanceId: process.env.EXT_INSTANCE_ID!,
};
