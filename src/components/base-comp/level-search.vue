
<template>
    <Select class="level-select" v-model="model1" placeholder="棒客等级(全部)">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 0,
                        label: '0级'
                    },
                    {
                        value: 1,
                        label: '1级'
                    },
                    {
                        value: 2,
                        label: '2级'
                    },
                    {
                        value: 3,
                        label: '3级'
                    },
                    {
                        value: 4,
                        label: '4级'
                    },
                    {
                        value: 5,
                        label: '5级'
                    },
                    {
                        value: 6,
                        label: '6级'
                    },
                    {
                        value: 7,
                        label: '7级'
                    },
                    {
                        value: 8,
                        label: '8级'
                    },
                ],
                model1: ''
            }
        }
    }
</script>