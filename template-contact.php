<?php /* Template Name: Formation template-contact */ get_header(); ?>
<section class="page_header">
  <div class="container">
    <ul class="breadcrumb">
      <li><a href="../index.html">Accueil</a></li>
      <i class="ri-arrow-right-s-line"></i>
      <li class="active"><a href="#">CONTACT</a></li>
    </ul>
  </div>
</section>
<section>
  <div class="container page_content_contact">
    <!-- right -->
    <div class="page_content_contact_right">
      <h2>
        <strong>Coordonnées de l’Etablissement </strong>
      </h2>
      <h4>Groupe IISGA Site 1</h4>
      <hr />
      <ul>
        <li>
          <i class="ri-map-pin-fill"></i>
          60, Résidence Mansour Billah, Appt 18,19, 21 et 24, Boulevard
          Mohamed V, 24000 – El Jadida
        </li>
        <li>
          <i class="ri-phone-fill"></i>+212 523 354 496 / +212 523 341 367
        </li>
        <li>
          <i class="ri-mail-fill"></i>
          <a href="#">contact@iisga.ma</a>
        </li>
      </ul>
      <h4>Groupe IISGA Site 2</h4>
      <hr />
      <ul>
        <li>
          <i class="ri-map-pin-fill"></i>
          60, Résidence Mansour Billah, Appt 18,19, 21 et 24, Boulevard
          Mohamed V, 24000 – El Jadida
        </li>
        <li>
          <i class="ri-phone-fill"></i>+212 523 354 496 / +212 523 341 367
        </li>
      </ul>
    </div>
    <!-- lift -->
    <div class="page_content_contact_lift">
      <h2><strong>Contact</strong></h2>
      <!-- form -->
      <form action="/contact" method="POST">
        <div class="form-row">
          <div class="form-group">
            <label>Nom complet <small>(Obligatoire)</small></label>
            <input value="" maxlength="100" class="form-control" name="nom" id="nom" required="required" type="text" />
          </div>
          <div class="form-group">
            <label>E-mail <small>(Obligatoire)</small></label>
            <input value="" maxlength="100" class="form-control" name="email" id="email" required="" type="email" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group_col">
            <label>Niveau d’Etudes</label>
            <input value="" maxlength="100" class="form-control" name="niveau_etude" id="niveau_etude" type="text" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group_col">
            <label>Téléphone <small>(Obligatoire)</small></label>
            <input value="" maxlength="100" class="form-control" name="phone" id="phone" required="" type="text" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group_col">
            <label>Sujet <small>(Obligatoire)</small></label>
            <input value="" maxlength="100" class="form-control" name="sujet" id="sujet" type="text" required="" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group_col">
            <label>Message <small>(Obligatoire)</small></label>
            <textarea maxlength="5000" rows="10" class="form-control" name="message" id="message"
              required=""></textarea>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group_col">
            <input type="hidden" name="sendmail" value="ok" />
            <input value="Envoyer" class="btn" type="submit" />
          </div>
        </div>
      </form>
      <!--end form  -->
    </div>
  </div>
</section>
<!-- start section google maps -->
<section class="google_map">
  <!-- ss -->
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61455.77557859564!2d-6.3320294098888406!3d32.33097013229178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda38649419c7fc1%3A0x6236b3e9a12bafd9!2z2KjZhtmKINmF2YTYp9mE4oCO!5e1!3m2!1sar!2sma!4v1692533171999!5m2!1sar!2sma"
    width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
  <!-- ss -->
</section>
<!-- end section google maps -->

<?php get_footer(); ?>