const commonState = {
  processing: false,
  processed: false,
  success: false,
  errors: {},
  message: "",
};

export const defaultSingleObjectState: SingleObjectState = {
  ...commonState,
  data: {},
};
export const defaultSingleObjectArrayState: SingleObjectArrayState = {
  ...commonState,
  data: [],
};
export const defaultManyObjectState: ManyObjectState = {
  ...commonState,
  data: [],
  pagination: {
    currentPage: "",
    nextPage: "",
    totalEntries: 0,
  },
};
