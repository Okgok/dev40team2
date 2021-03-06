package thedrivers.upbus.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import thedrivers.upbus.interceptor.CommonInterceptor;

/*@Configuration
public class WebConfig implements WebMvcConfigurer{
	
	private final CommonInterceptor commonInterceptor;
	
	public WebConfig(CommonInterceptor commonInterceptor) {
		this.commonInterceptor = commonInterceptor;
	}
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		
		registry.addInterceptor(commonInterceptor)
				.addPathPatterns("/**")
				.excludePathPatterns("/css/**")
				.excludePathPatterns("/favicon.ico");
					
		WebMvcConfigurer.super.addInterceptors(registry);
	}

}*/
