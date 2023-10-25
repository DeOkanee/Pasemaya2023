const daftar = document.getElementById("daftar");
		daftar.addEventListener("click", function () {
		  Swal.fire({
			icon: "info",
			title: "Oops...",
			text: "Pendaftaran Sudah Ditutup !",
		  });
		});
  
		const Ketentuan = document.getElementById("Ketentuan");
		formulir.addEventListener("click", function () {
		  Swal.fire({
			icon: "info",
			title: "Oops...",
			text: "Ketentuan Sudah Ditutup !",
		  });
		});

        const swals = Swal.mixin({
            cancelButtonColor: "#DC143C",
            confirmButtonColor: "#00008B",
            allowOutsideClick: false,
          });
          const swap = iloveu.mixin({
            cancelButtonColor: "#909090",
            confirmButtonColor: "#2B2B2B",
            allowOutsideClick: true,
          });