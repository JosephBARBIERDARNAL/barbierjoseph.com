## Consulting

Most of my consulting services center around **data science projects**, utilizing Python or R. I regularly employ tools such as Git/GitHub, Quarto, and Streamlit, among others.

On the web development side, I primarily work with React-based applications.

My core expertise lies in data visualization, especially with Python's matplotlib, though I handle a wide variety of projects for my clients. If you're interested, feel free to contact me:

<div style="display: flex; align-items: center;">
  <code id="email" style="margin-right: 10px;">joseph.barbierdarnal@gmail.com</code>
  <button 
    id="copyButton"
    onclick="copyEmail()" 
    style="
      padding: 5px 10px; 
      background-color: #58616a; 
      color: white; 
      border: none; 
      border-radius: 4px; 
      cursor: pointer;
      font-size: 0.9em;
      transition: background-color 0.3s;
    "
    onmouseover="this.style.backgroundColor='#91959a';" 
    onmouseout="this.style.backgroundColor='#58616a';"
  >
    Copy
  </button>
</div>

<script>
function copyEmail() {
    const email = document.getElementById('email').innerText;
    const copyButton = document.getElementById('copyButton');

    navigator.clipboard.writeText(email).then(function() {
        copyButton.innerText = 'Copied';
        copyButton.disabled = true;
        copyButton.style.backgroundColor = '#28a745'; 

        setTimeout(function() {
            copyButton.innerText = 'Copy';
            copyButton.disabled = false;
            copyButton.style.backgroundColor = '#58616a'; 
        }, 2000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
</script>

## Matplotlib

I’ve spent hundreds of hours <a href="/visualization">creating charts with Matplotlib</a>—from maps to animations, and even building third-party extensions for Matplotlib.

Since I believe it’s one of the most powerful data visualization tools out there, I co-created an **online course** called **<a href="https://www.matplotlib-journey.com/" target="_blank">Matplotlib Journey</a>**. The course takes you from zero to hero in Matplotlib and also covers best practices in data visualization, enabling anyone to create any type of chart they can imagine.

> We offer discounts for students, low-income countries and groups (n>=3)!

## Open source

I contribute to and maintain various packages, primarily in the **Python dataviz world**. My goal is to simplify data science tasks without compromising on extensive customization capabilities.

- [pypalettes](https://github.com/JosephBARBIERDARNAL/pypalettes){:target="\_blank"}: a comprehensive collection of colormaps for Python
- [pyfonts](https://github.com/JosephBARBIERDARNAL/pyfonts){:target="\_blank"}: working with fonts in Matplotlib, enhancing ease and reproducibility
- [drawarrow](https://github.com/JosephBARBIERDARNAL/drawarrow){:target="\_blank"}: simplifies the process of customizing arrows in Matplotlib
- [morethemes](https://github.com/JosephBARBIERDARNAL/morethemes){:target="\_blank"}: themes for Matplotlib
- [dayplot](https://github.com/JosephBARBIERDARNAL/dayplot){:target="\_blank"}: calendar heatmaps in Matplotlib
- [gifing](https://github.com/JosephBARBIERDARNAL/gifing){:target="\_blank"}: makes creating GIFs straightforward and effortless.

## I work with them!

<div class="testimonials">

  <div class="testimonial">
    <a href="https://www.yan-holtz.com/" target="_blank"><img src="../img/yan.png" alt="Yan Holtz"></a>
    <div class="testimonial-content">
      <a href="https://www.yan-holtz.com/" target="_blank"><div class="testimonial-name">Yan Holtz</div></a>
      <div class="testimonial-job">Software Engineer - Independent</div>
      <p>
        I hired Joseph for a six-month internship, during which he contributed
        to several educational websites focused on programming and data
        visualization.
      </p>
      <p>
        Joseph consistently delivered outstanding work. He is a fast learner,
        highly productive, detail-oriented, and deeply curious. What impressed
        me most was his autonomy and proactive approach—he always took the
        initiative without needing guidance.
      </p>
      <p>
        Whatever role you need to fill, Joseph will exceed your expectations.
      </p>
    </div>
  </div>

  <div class="testimonial">
    <a href="https://scholar.google.fr/citations?user=K8-EhrwAAAAJ&hl=fr" target="_blank"><img src="../img/nicolas.jpg" alt="Nicolas Rode"></a>
    <div class="testimonial-content">
      <a href="https://scholar.google.fr/citations?user=K8-EhrwAAAAJ&hl=fr" target="_blank"><div class="testimonial-name">Nicolas Rode</div></a>
      <div class="testimonial-job">Researcher - INRAE</div>
      <p>
        Joseph did a wonderful job at turning our messy scripts into a
        clean R package. As a developer, he is very good at understanding
        what we want and coming up with innovative solutions.
      </p>
      <p>
        His proficiency in various programming languages (R, Python,
        Pascal) has clearly been an asset for the project. We highly
        recommend working with him.
      </p>
    </div>
  </div>

  <div class="testimonial">
    <a href="https://www.linkedin.com/in/thomas-salanova/" target="_blank"><img src="../img/thomas.png" alt="Thomas Salanova"></a>
    <div class="testimonial-content">
      <a href="https://www.linkedin.com/in/thomas-salanova/" target="_blank"><div class="testimonial-name">Thomas Salanova</div></a>
      <div class="testimonial-job">Researcher and Psychologist - Bordeaux Métropole</div>
      <p>
         As well as his technical skills, Joseph has excellent
         communication skills. His attitude and teaching skills make him a
         pleasure to work with. Even after his internship, I repeatedly
         asked for his help with questions related to related to coding,
         statistics or using GitHub.
      </p>
      <p>
         Each time, Joseph was able to respond responsive and relevant,
         providing clear and appropriate solutions. His explanations
         illustrate his ability to pass on his knowledge very effectively.
      </p>
    </div>
  </div>

</div>

<br>
