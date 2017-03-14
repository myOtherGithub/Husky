var self;

function Husky(page){
	self = this;
	if(page){
		self.build(page);	
	}
}

Husky.prototype.build = function(element) {
	var renderedPage = self.render(element);
	$(document).ready(function(){
		$('body').append(renderedPage);
	});	
};

Husky.prototype.render = function(object){
	this.html = "";
	var completedHtml = this;
	$.each(object, function(key,value){
		if(self.isObject(value) && key !=="attributes"){
			completedHtml.html += self.renderStartTag(key,value.attributes);
			if(value.text){
				completedHtml.html += value.text;
			}
			completedHtml.html += self.render(value);
			completedHtml.html += self.renderEndTag(key);
		}
	});
	return completedHtml.html;
}

Husky.prototype.isObject = function(element){
	return element !== null && typeof element === 'object'
}

Husky.prototype.renderStartTag = function(element, attributes){
	if(attributes){
		var combinedAttributes = "";
		console.log(attributes);
		for (var i = 0; i < attributes.length; i++) {
				combinedAttributes += attributes[i] + " ";
				console.log(attributes[i]);
		}	
		return "<"+element+" "+combinedAttributes+">";
	}else{
		return "<"+element+">";
	}
}

Husky.prototype.renderEndTag = function(element){
	return "</"+element+">";
}
