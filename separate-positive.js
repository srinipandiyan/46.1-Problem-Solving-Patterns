// add whatever parameters you deem necessary
function separatePositive(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] < 0 && nums[right] > 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];

            left ++;
            right --;
        } else {
            if (nums[left] > 0) left++;
            else right--;
        }
    }

    return nums;
}

separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -8, -1]
separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
separatePositive([-5, 5]) // [5, -5]
separatePositive([1, 2, 3]) // [1, 2, 3]