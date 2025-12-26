function combineUsers(...arrays) {
  return {
    users: arrays.flat(),
    merge_date: new Date().toLocaleDateString()
  };
}

module.exports = {
  combineUsers
};
