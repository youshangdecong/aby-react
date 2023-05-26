class Cache {
  constructor(type = "localStorage") {
    this.storageType = type;
  }
  get(name) {
    return JSON.parse(window[this.storageType].getItem(name));
  }
  set(name, value, callback) {
    window[this.storageType].setItem(name, JSON.stringify(value));
    callback && callback();
  }
  remove(name) {
    window[this.storageType].removeItem(name);
  }
}

export default new Cache();
