export const PageNames = {
  MANAGE_CONTENT_PAGE: 'MANAGE_CONTENT_PAGE',
  MANAGE_PERMISSIONS_PAGE: 'MANAGE_PERMISSIONS_PAGE',
  USER_PERMISSIONS_PAGE: 'USER_PERMISSIONS_PAGE',
};

export const ContentWizardPages = {
  CHOOSE_IMPORT_SOURCE: 'CHOOSE_IMPORT_SOURCE',
  EXPORT: 'EXPORT',
  IMPORT_LOCAL: 'IMPORT_LOCAL',
  IMPORT_NETWORK: 'IMPORT_NETWORK',
  AVAILABLE_CHANNELS: 'AVAILABLE_CHANNELS',
};

export const TaskTypes = {
  REMOTE_IMPORT: 'remoteimport',
  LOCAL_IMPORT: 'localimport',
  LOCAL_EXPORT: 'localexport',
  DELETE_CHANNEL: 'deletechannel',
};

export const TaskStatuses = {
  IN_PROGRESS: 'INPROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  QUEUED: 'QUEUED',
  SCHEDULED: 'SCHEDULED',
};

export const TransferTypes = {
  LOCALIMPORT: 'localimport',
  REMOTEIMPORT: 'remoteimport',
  LOCALEXPORT: 'localexport',
};
