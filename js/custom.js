Vue.component('SignupForm',{
	data(){
		return{
			email:'',
			password:'',
			conpassword:'',
			disable_signup:true,
			disable_style:{'cursor': 'not-allowed'},
			
			// validation section
			msg:[],
			
		}
	},
	watch:{
		email(val){
			this.email = val;
			this.check_email(val);
		},
		password(val){
			this.password = val;
			this.check_pass(val);
		},
		conpassword(val){
			this.conpassword = val;
			this.check_confirmpass(val);
		},
	},
	methods:{
		tnc_link(){
			this.$emit('get_link');
		},
		check_email(val){
			if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(val))
			{
				this.msg['email'] ='';
			}
			else{
				this.msg['email'] ='keep typing...';
			}
		},
		check_pass(val){
			remainingPass= 6 - val.length;
			if(/^[A-Za-z]\w{5,6}$/.test(val))   
			{   
			this.msg['password'] ='';
			}  
			else  
			{   
			this.msg['password'] ='must contains alphanumeric value '+remainingPass +' more to go ';
			}  
		},
		check_confirmpass(val){
			if (this.password == val) {
				this.msg['conpassword'] ='';
				this.disable_signup = false;
				this.disable_style='';
			}
			else{
				this.msg['conpassword'] ='not matched...';	
			}
		},
		submitForm(){
			alert('You have completed this project');
		}
	},
	template:`
	<div class="card">
		<div class="card-block">
			<div class="list-group">
				<h4 class="list-group-item active">Vue js form validation</h4>
				<form action='' >
					<fieldset class="form-group">
						<label for="email">Email</label>
						<input type="email" v-model='email' class="form-control" id="email" placeholder="Email">
						<span class='text-danger' v-if='msg.email'>{{msg.email}}</span>
					</fieldset>
					<fieldset class="form-group">
						<label for="password">Password</label>
						<input type="text" maxlength='6' v-model='password' class="form-control" id="password" placeholder="Password">
						<span class='text-danger' v-if='msg.password'>{{msg.password}}</span>
					</fieldset>	
					<fieldset class="form-group">
						<label for="conpassword">Confirm Password </label>
						<input type="text" maxlength='6' v-model='conpassword' class="form-control" id="conpassword" placeholder="Password">
						<span class='text-danger' v-if='msg.conpassword'>{{msg.conpassword}}</span>
					</fieldset>	
					<fieldset>
						<a href='' class="btn btn-primary" :disabled='disable_signup' :style='disable_style' @click.prevent='submitForm'>Sign Up</a>
						<span class="float-right"><a href="" @click.prevent='tnc_link' title="">Terms and Condition</a></span>
					</fieldset>
				</form>	
			</div>
		</div>
	</div>
	`,
});



Vue.component('termsAdnCondition',{
	methods:{
		btsu(){
			this.$emit('btsu2');
		}
	},
	template:`
	<div class="card">
		<div class="card-block">
			<div class="list-group">
				<h4 class="list-group-item active">Terms and Condition</h4>
			    <ul class="list-group">
						<li class="list-group-item list-group-item-success|info|warning|danger">Dapibus ac facilisis in</li>
						<li class="list-group-item list-group-item-success|info|warning|danger">Dapibus ac facilisis in</li>
						<li class="list-group-item list-group-item-success|info|warning|danger">Dapibus ac facilisis in</li>
						<li class="list-group-item list-group-item-success|info|warning|danger">Dapibus ac facilisis in</li>
						<a href="" @click.prevent='btsu' class="btn btn-info" title="">Back to SignUp</a>
					</ul>
			</div>
		</div>
	</div>
	`,
});




// Root component section
var app= new Vue({
	el:'#app',
	data:{
		componentName:'SignupForm',
	},
	methods:{
		set_link(){
			this.componentName = 'termsAdnCondition';
			console.log(this.componentName);
		},
		btsu3(){
			this.componentName = 'SignupForm';
		}
	},
});
