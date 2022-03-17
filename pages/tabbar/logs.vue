<template>
	<view class="">
		<uni-collapse accordion v-if="list && list.length">
			<uni-collapse-item :title="'企业名称：' + item.name" v-for="item in list" :key="item.apply_id">
				<uni-list>
					<uni-list-item title="企业类型" :rightText="codeTypes[item.code_type]"></uni-list-item>
					<uni-list-item title="企业代码" :rightText="item.code"></uni-list-item>
					<uni-list-item title="法人姓名" :rightText="item.legal_persona_name"></uni-list-item>
					<uni-list-item title="法人微信号" :rightText="item.legal_persona_wechat"></uni-list-item>
					<uni-list-item title="提交时间" :rightText="item.apply_time"></uni-list-item>
					<uni-list-item title="申请状态" :rightText="applyStatus[item.status]"></uni-list-item>
					<uni-list-item>
						<uni-steps
							style="width: 100%;"
							slot="header"
							:options="options"
							:active="item.status"
						></uni-steps>
					</uni-list-item>
				</uni-list>
			</uni-collapse-item>
		</uni-collapse>
		<mix-empty v-else></mix-empty>
	</view>
</template>

<script>
export default {
	data() {
		return {
			activeNames: [],
			loading: false,
			list: [],
			codeTypes: {
				1: '统一社会信用代码',
				2: '组织机构代码',
				3: '营业执照注册号'
			},
			applyStatus: {
				0: '草稿',
				1: '申请',
				2: '提交微信',
				3: '退回',
				4: '完结'
			},
			options: [{ title: '草稿' }, { title: '申请' }, { title: '提交微信' }, { title: '退回' }, { title: '完结' }]
		};
	},
	onShow() {
		this.loadData();
	},
	methods: {
		async loadData() {
			const res = await this.$request('/api/index/applyList');
			if (res.code === 20000) {
				this.list = res.data;
			}
		}
	}
};
</script>

<style></style>
