!function(a,b){"$:nomunge";var c,d=a.jQuery||a.Cowboy||(a.Cowboy={});d.throttle=c=function(a,c,e,f){function g(){function d(){i=+new Date,e.apply(j,l)}function g(){h=b}var j=this,k=+new Date-i,l=arguments;f&&!h&&d(),h&&clearTimeout(h),f===b&&k>a?d():c!==!0&&(h=setTimeout(f?g:d,f===b?a-k:a))}var h,i=0;return"boolean"!=typeof c&&(f=e,e=c,c=b),d.guid&&(g.guid=e.guid=e.guid||d.guid++),g},d.debounce=function(a,d,e){return e===b?c(a,d,!1):c(a,e,d!==!1)}}(this);