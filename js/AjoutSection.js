let compteur = 0;

function ajouterSousSection() {
    console.log("Ajout dynamique activé !");

    compteur++;
    let sectionHTML = `
        <div class="sous-section">
            <label>Titre :</label>
            <input type="text" name="TitreDetail[]" required><br>

            <label>Description :</label>
            <textarea name="DescDetail[]"></textarea><br>

            <label>Image (facultatif):</label>
            <input type="file" name="ImgDetail[]" accept="image/*""><br>

            <button type="button" class="btn-red" onclick="supprimerSousSection(this)">Supprimer</button><br><br>
        </div>
    `;
    document.getElementById('sousSections').insertAdjacentHTML('beforeend', sectionHTML);
    
}

function supprimerSousSection(element) {
    element.parentElement.remove();
}