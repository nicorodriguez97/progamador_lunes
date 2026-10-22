var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* página de inicio. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Travesía Argentina' });
});

/* Contacto. */
router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Contacto - Travesía Argentina' });
});

/* Blogs */
router.get('/blogs', function(req, res, next) {
  res.render('blogs', { title: 'Blog - Travesía Argentina' });
});

/* Blogs generales */
router.get('/blog/bariloche', function(req, res, next) {
  res.render('blog-bariloche', { title: 'Bariloche - Blog Travesía Argentina' });
});

router.get('/blog/ushuaia', function(req, res, next) {
  res.render('blog-ushuaia', { title: 'Ushuaia - Blog Travesía Argentina' });
});

router.get('/blog/iguazu', function(req, res, next) {
  res.render('blog-iguazu', { title: 'Iguazú - Blog Travesía Argentina' });
});

router.get('/blog/mendoza', function(req, res, next) {
  res.render('blog-mendoza', { title: 'Mendoza - Blog Travesía Argentina' });
});


/* Formulario de contacto de Nodemailer y Mailtrap */
router.post('/contacto', async (req, res, next) => {
  var nombre = req.body.nombre;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var asunto = req.body.asunto;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'rodriguezd12341234@gmail.com',
    subject: `Contacto desde la web`,
    html: `${nombre} se contactó a través de la web y quiere más información. Su correo es: ${email}. <br> Teléfono: ${telefono}. <br> Mensaje: ${mensaje}`
  };

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail(obj);

  res.render('contacto', {
    title: 'Contacto - Travesía Argentina',
    mensajeEnviado: '¡Mensaje enviado con éxito!'
  });
});

module.exports = router;