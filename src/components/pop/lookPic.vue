<template>
    <div class="size">
    	<Carousel class="innerPic"  v-model="value" loop dots="outside">
	        <CarouselItem>
	            <div class="demo-carousel">1</div>
	        </CarouselItem>
	        <CarouselItem>
	            <div class="demo-carousel">2</div>
	        </CarouselItem>
	        <CarouselItem>
	            <div class="demo-carousel">3</div>
	        </CarouselItem>
	        
	    </Carousel>
	    <ul class="font-dots">
	    	<li :class="[value===0? activeClass : '', fontBtn]">身份证正面</li>
	    	<li :class="[value===1? activeClass : '', fontBtn]">身份证反面</li>
	    	<li :class="[value===2? activeClass : '', fontBtn]">持身份证正面</li>
	    </ul>
	    <Button class="close" type="primary" shape="circle" icon="close-round" @click="closePic"></Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: 0,
                activeClass: 'active',
                fontBtn: 'font-btn'
            }
        },
        methods: {
        	closePic() {
        		this.$emit("close")
        	}
        }
    }
</script>

<style scoped>
	.size {
		width:864px;
		height: 554px;
		box-sizing: border-box;
		border:1px solid #bbbec4;
		position: absolute;
		left:50%;
		top:50%;
		transform: translate(-50% ,-50%);
		background: #fff;
		border-radius: 8px;
	}

    .innerPic {
    	width:864px;
    	height: 554px;
    	position: absolute;
    	left:50%;
    	top:20px;
    	transform: translateX(-50%);
    	overflow:hidden;
    }
    .demo-carousel {
    	width:760px;
    	height:460px;
    	background:#ff890f;
    	margin:0 auto;
    }
	.font-dots {
		position: absolute;
		left:50%;
		transform: translateX(-50%);
		bottom:20px;
	}
	.font-btn {
		display: inline-block;
	    padding: 0 4px;
	    color: #bbbec4;
	    font-weight: bold;
	    cursor: pointer;
	}
	.active {
		color:blue;
	}
	.close {
		position: absolute;
		top:4px;
		right:4px;
	}
</style>