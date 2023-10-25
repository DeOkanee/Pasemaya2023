const daftar = document.getElementById("daftar-condong");
		daftar.addEventListener("click", function () {
		  Swal.fire({
			icon: "info",
			title: "Oops...",
			text: "Pendaftaran dan Ketentuan Sudah Ditutup !",
		  });
		});

  const swap = iloveu.mixin({
    cancelButtonColor: "#909090",
    confirmButtonColor: "#2B2B2B",
    allowOutsideClick: true,
  });
