function twoSum(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var another = target - nums[i];
        if (another in map) {
            return [map[another], i];
        }
        map[nums[i]] = i;
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([1, 3, 4, 2], 6));
console.log(twoSum([-1, -2, -3, -4, -5], -8));
