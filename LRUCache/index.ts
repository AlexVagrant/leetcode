/**
 * @param {number} capacity
 */
interface LRUCacheType {
  size: number;
  cache: Map<number, number>;
  arr: number[];
  get: (key: number) => void;
  put: (key: number, value: number) => void;
}

var LRUCache = function(this: LRUCacheType, capacity: number) {
  this.size = capacity;
  this.cache = new Map();
  this.arr = [];
} as any as {new (capacity: number): LRUCacheType}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key: number) {
  if(this.cache.has(key)) {
    // 获取当前位置
    const index = this.arr.indexOf(key);
    // 删除当前位置
    this.arr.splice(index, 1);
    // 添加到最后一个
    this.arr.push(key);
    console.log(this.cache.get(key), this.arr)
    return this.cache.get(key);
  } else {
    console.log(-1)
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key: number, value: number) {
  if (this.cache.size >= this.size) {
    const first = this.arr.shift();
    this.cache.delete(first);
    console.log('put', this.arr);
    this.arr.push(key);
    this.cache.set(key, value);
  }
  if (this.cache.has(key)) {
    this.cache.set(key, value);
    const index = this.arr.indexOf(key);
    this.arr.splice(index, 1);
    this.arr.push(key);
  } else {
    this.cache.set(key, value);
    this.arr.push(key);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const cache = new LRUCache(2);

cache.get(2)
cache.put(2,6)
cache.get(1)
cache.get(2)
cache.put(1,5)
cache.put(1,2)
cache.get(1)
//cache.get(2)

