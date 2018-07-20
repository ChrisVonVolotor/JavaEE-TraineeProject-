package coms.qa.service.repository;

public interface TraineeRepository {

	String getAllTrainee();

	String createTrainee(String trainee);

	String updateTrainee(Long id, String traineeToUpdate);

	String deleteTrainee(Long id);
}
