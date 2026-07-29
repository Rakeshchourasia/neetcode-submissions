class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i = 0;
        let n = nums.length - 1;

        while (i <= n) {
            if (nums[i] === val) {
                [nums[i], nums[n]] = [nums[n], nums[i]];
                n--;
            } else {
                i++;
            }
        }

        return i; 
    }
}
