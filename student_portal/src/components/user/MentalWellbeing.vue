<template>
	<div id='mentalWellbeing'>
		<h1>Feeling stressed during the pandemic?</h1>
		
		<div class="row bm-3 justify-content-center">
			<img :src="require('@/assets/covid-anxiety.jpg')">
		</div>

		<h2>Check out our selection of articles below.</h2>

		<div>
			<figure>
				<a href="https://www.nm.org/about-us/northwestern-medicine-newsroom/nm-news-blog/13-ways-to-help-a-friend-with-anxiety-during-coronavirus"><img v-img :src="require('@/assets/call.jpg')" width="250px"></a>
				<figcaption>Call a friend</figcaption>
			</figure>
			<figure>
				<a href="https://www.huffpost.com/entry/benefits-of-journaling-_b_6648884"><img v-img :src="require('@/assets/journal.png')" width="250px"></a>
				<figcaption>Benefits of journalling</figcaption>
			</figure>
			<figure>
				<a href="https://www.triathlete.com/training/yoga-during-the-pandemic/"><img v-img :src="require('@/assets/yoga.jpg')" width="250px"></a>
				<figcaption>Pick up yoga</figcaption>
			</figure>
		</div>
	</div>
</template>

<script>
export default {
	name: 'mentalWellbeing',
	props: ['user', 'username', 'moduleList'],
	components: {},
}
</script>

<style lang="css" scoped>
	articles {
		width: 100%;
		margin-bottom: 100px
	}
	figure {
		display: inline-block;
	}
	.articles figure img{
		width: 200px;
		height: 200px;
		margin: 30px 50px;
		display: inline-block;
		border: 2px solid #555;
	}
	img{
		margin: 30px;
	}
</style>