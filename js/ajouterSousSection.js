function ajouterSousSection() {
    const container = document.getElementById('nouvellesSousSections');

    const bloc = document.createElement('div');
    bloc.classList.add('sous-section-block');

    bloc.innerHTML = `
        <label>Titre :</label>
        <input type="text" name="TitreDetail[]" required>

        <label>Description :</label>
        <textarea name="DescDetail[]" required></textarea>

        <label>Image :</label>
        <input type="file" name="ImgDetail[]" accept="image/*">

        <input type="hidden" name="IdDetail[]" value="new">
        <input type="hidden" name="ImgDetail_Existante[]" value="">

        <button type="button" class="btn-red" onclick="supprimerSousSection(this)">Supprimer</button><br><br>
    `;

    container.appendChild(bloc);
}

function supprimerSousSection(element) {
    element.parentElement.remove();
}