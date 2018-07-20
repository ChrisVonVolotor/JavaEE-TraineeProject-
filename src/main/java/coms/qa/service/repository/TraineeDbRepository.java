package coms.qa.service.repository;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

import java.util.Collection;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.apache.log4j.Logger;

import com.qa.domain.Trainee;
import com.qa.service.business.TraineeService;
import com.qa.util.JSONUtil;

public class TraineeDbRepository implements TraineeRepository {
	private static final Logger LOGGER = Logger.getLogger(TraineeRepository.class);

	@PersistenceContext(unitName = "primary")
	private EntityManager manager;

	@Inject
	private JSONUtil util;

	public String getAllTrainee() {
		LOGGER.info("In TraineeDbRepository getAllTrainee ");
		Query query = manager.createQuery("Select a FROM Trainee a");
		Collection<Trainee> accounts = (Collection<Trainee>) query.getResultList();
		return util.getJSONForObject(accounts);
	}

	@Transactional(REQUIRED)
	public String createTrainee(String trainee) {
		LOGGER.info("In TraineeDbRepository createTrainee ");
		Trainee anAccount = util.getObjectForJSON(trainee, Trainee.class);
		manager.persist(anAccount);
		return "{\"message\": \"account has been sucessfully added\"}";
	}

	@Transactional(REQUIRED)
	public String updateTrainee(Long id, String traineeToUpdate) {
		LOGGER.info("In TraineeDbRepository updateTrainee ");
		Trainee updatedAccount = util.getObjectForJSON(traineeToUpdate, Trainee.class);
		Trainee accountFromDB = findTrainee(id);
		if (traineeToUpdate != null) {
			if(updatedAccount.getFirstName() == null) {
				updatedAccount.setFirstName(accountFromDB.getFirstName());
			}
			if(updatedAccount.getSecondName() == null) {
				updatedAccount.setSecondName(accountFromDB.getSecondName());
			}
			if(updatedAccount.getSubject() == null) {
				updatedAccount.setSubject(accountFromDB.getSubject());
			}
			accountFromDB = updatedAccount;
			manager.merge(accountFromDB);
			return "{\"message\": \"account sucessfully updated\"}";

		}
		return "{\"message\": \"account failed to updated no trainee data input\"}";

			
	}

	@Transactional(REQUIRED)
	public String deleteTrainee(Long id) {
		LOGGER.info("In TraineeDbRepository deleteTrainee ");
		Trainee accountInDB = findTrainee(id);
		if (accountInDB != null) {
			manager.remove(accountInDB);
		}
		return "{\"message\": \"account sucessfully deleted\"}";
	}

	private Trainee findTrainee(Long id) {
		LOGGER.info("In TraineeDbRepository findTrainee ");
		return manager.find(Trainee.class, id);
	}

	public void setManager(EntityManager manager) {
		this.manager = manager;
	}

	public void setUtil(JSONUtil util) {
		this.util = util;
	}

}
