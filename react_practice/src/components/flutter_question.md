<h1>Flutter Interview Question</h1>
<hr>
<h4>1. What is flutter?</h4>
<p>Flutter is an open-source UI toolkit from Google for crafting beautiful, natively compiled applications for desktop, web, and mobile from a single codebase. Flutter apps are built using the Dart programming language.</p>
<h4>2. What is the difference between Expanded and Flexible widget?</h4>

<p><code style="color: #fa4349;">Expanded</code> is just a shorthand for <code  style="color: #fa4349;">Flexible</code></p>
<span>Using expanded this way:</span>
<code>
<pre>
<span style="color:#e9ac49">Expanded</span>(
    child: <span  style="color:#e9ac49">Foo()</span> ,
);
</pre>
</code>
<span>Using expanded this way:</span>
<pre>

<span style="color:#e9ac49">Flexible</span>(
fit: FlexFit.tight,
child: <span  style="color:#e9ac49">Foo()</span> ,
);

</pre>
